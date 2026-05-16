import { GoogleGenAI } from "@google/genai";

export async function getSubstitution(item: string, recipeName: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    return "I need a Gemini API key to help with smart substitutions. Please add it to your environment variables.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `You are a creative cooking and crafting expert. 
    A user is following a recipe/tutorial for "${recipeName}" and is missing the following item: "${item}".
    
    Provide 1-2 practical and creative substitutes they might have at home. 
    Be encouraging and brief (under 100 characters).
    Format the response as a friendly direct suggestion.`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return result.text || "Sorry, I couldn't find a substitute right now.";
  } catch (error) {
    console.error("Substitution error:", error);
    return "Sorry, I couldn't find a substitute right now. Try looking for something similar in your pantry!";
  }
}
