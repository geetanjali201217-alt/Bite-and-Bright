import { GoogleGenAI } from "@google/genai";
import { Recipe } from "../data/recipes";

export async function scaleRecipe(recipe: Recipe, targetServings: number): Promise<{ ingredients: string[] }> {
  if (targetServings === 4 || !process.env.GEMINI_API_KEY) {
    return { ingredients: recipe.ingredients };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Scale the following Indian recipe ingredients from 4 servings to ${targetServings} servings. 
    Recipe: ${recipe.name}
    Original Ingredients (for 4): ${recipe.ingredients.join(', ')}
    
    Return ONLY the scaled ingredients as a JSON array of strings. 
    Example format: ["2 cups rice", "4 tsp salt"]`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = result.text;
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return { ingredients: JSON.parse(jsonMatch[0]) };
    }
    return { ingredients: recipe.ingredients };
  } catch (error) {
    console.error("Scaling error:", error);
    return { ingredients: recipe.ingredients };
  }
}

export async function generateGroceryList(recipesToPlan: Recipe[]): Promise<Record<string, string[]>> {
  if (!process.env.GEMINI_API_KEY || recipesToPlan.length === 0) return {};

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Combine the ingredients for these recipes into a single, organized grocery list:
    ${recipesToPlan.map(r => `${r.name}: ${r.ingredients.join(', ')}`).join('\n')}
    
    Group the items by category: "Vegetables & Produce", "Spices & Oils", "Dairy & Proteins", "Grains & Pantry".
    Return the result as a JSON object where keys are categories and values are arrays of combined items.
    Merge quantities where possible (e.g. "2 onions" and "1 onion" becomes "3 onions").`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = result.text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return {};
  } catch (error) {
    console.error("Grocery list error:", error);
    return {};
  }
}

export async function getPairingSuggestion(recipe: Recipe, allRecipes: Recipe[]): Promise<Recipe | null> {
  if (!process.env.GEMINI_API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    // We send a summary of other recipes to help it pick
    const options = allRecipes
      .filter(r => r.category === 'Rice Dishes' || r.category === 'Breads' || r.category === 'Chutneys & Pickles')
      .slice(0, 50) // Limit to avoid context bloat
      .map(r => ({ id: r.id, name: r.name, category: r.category }));

    const prompt = `The user is viewing the recipe: "${recipe.name}" (${recipe.category}).
    From the following list of side dishes, breads, and chutneys, pick the ONE single best matching pairing.
    
    Options: ${JSON.stringify(options)}
    
    Return ONLY the exact "id" of the chosen recipe as a string.`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const chosenId = result.text.trim().replace(/['"]/g, '');
    return allRecipes.find(r => r.id === chosenId) || null;
  } catch (error) {
    return null;
  }
}

export async function getMealTypeFilter(recipes: Recipe[], mealType: string): Promise<string[]> {
  if (!process.env.GEMINI_API_KEY) return [];

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const options = recipes.map(r => ({ id: r.id, name: r.name, category: r.category }));
    
    const prompt = `Filter the following Indian recipes to find the top 10 best matches for a "${mealType}".
    Options: ${JSON.stringify(options.slice(0, 100))}
    
    Return ONLY a JSON array of the recipe "id"s.`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const jsonMatch = result.text.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
  } catch (error) {
    return [];
  }
}
