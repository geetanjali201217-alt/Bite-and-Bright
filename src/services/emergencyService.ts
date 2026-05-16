import { GoogleGenAI } from "@google/genai";

export async function getEmergencyFix(problem: string, dishName: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) return "Need API key for emergency fixes.";

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `KITCHEN EMERGENCY! Dish: "${dishName}". Problem: "${problem}". 
    Give one instant, 1-sentence fix using common household items. Be decisive and brief.`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return result.text || "Try adding a splash of water or milk to balance it out.";
  } catch (error) {
    return "Don't panic! Remove from heat and add a bit of cream or half a potato to absorb excess flavors.";
  }
}
