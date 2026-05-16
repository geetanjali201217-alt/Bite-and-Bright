import { GoogleGenAI } from "@google/genai";
import { Recipe } from "../data/recipes";

export async function adjustRecipeFlavor(recipe: Recipe, preference: string): Promise<{ ingredients: string[], steps: string[] }> {
  if (preference === 'Classic' || !process.env.GEMINI_API_KEY) {
    return { ingredients: recipe.ingredients, steps: recipe.steps };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `You are an expert Indian chef. 
    Adjust the recipe "${recipe.name}" for a "${preference}" profile.
    Levels:
    - "Mild": Reduce chilies, maybe add cream/yogurt, use mild peppers.
    - "Medium": Balanced heat.
    - "Super Spicy": Add extra green chilies, red chili flakes, and black pepper.
    - "Maximum Zing": Add extra heat AND extra tanginess (amchur/lemon).
    
    Current Ingredients: ${recipe.ingredients.join(', ')}
    Current Steps: ${recipe.steps.join(' | ')}
    
    Rewrite to reflect "${preference}". Return JSON: { "ingredients": [...], "steps": [...] }`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = result.text;
    // Extract JSON from the response (sometimes Gemini wraps it in code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        ingredients: parsed.ingredients || recipe.ingredients,
        steps: parsed.steps || recipe.steps
      };
    }
    
    return { ingredients: recipe.ingredients, steps: recipe.steps };
  } catch (error) {
    console.error("Flavor adjustment error:", error);
    return { ingredients: recipe.ingredients, steps: recipe.steps };
  }
}
