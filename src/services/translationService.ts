import { GoogleGenAI } from "@google/genai";
import { Recipe } from "../data/recipes";

export async function translateRecipe(recipe: Recipe, language: string): Promise<{ name: string, ingredients: string[], steps: string[] }> {
  if (language === 'English' || !process.env.GEMINI_API_KEY) {
    return { name: recipe.name, ingredients: recipe.ingredients, steps: recipe.steps };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Translate this Indian recipe into ${language}. 
    Recipe: ${recipe.name}
    Ingredients: ${recipe.ingredients.join(', ')}
    Steps: ${recipe.steps.join(' | ')}
    
    Maintain the structure. Return ONLY JSON:
    { "name": "...", "ingredients": ["...", ...], "steps": ["...", ...] }`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const jsonMatch = result.text.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : { name: recipe.name, ingredients: recipe.ingredients, steps: recipe.steps };
  } catch (error) {
    return { name: recipe.name, ingredients: recipe.ingredients, steps: recipe.steps };
  }
}
