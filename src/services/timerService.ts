import { GoogleGenAI } from "@google/genai";

export async function extractTimers(steps: string[]): Promise<(number | null)[]> {
  if (!process.env.GEMINI_API_KEY) return steps.map(() => null);

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `Extract the cooking time in MINUTES for each step. 
    If no time is mentioned, return null for that step.
    Steps: ${steps.join(' | ')}
    
    Return ONLY a JSON array of numbers or null. Example: [null, 10, null, 5]`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const jsonMatch = result.text.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : steps.map(() => null);
  } catch (error) {
    return steps.map(() => null);
  }
}
