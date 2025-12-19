
import { GoogleGenAI } from "@google/genai";

export const analyzeProblemWithAI = async (description: string): Promise<string> => {
  try {
    // Ensuring the API key is strictly pulled from the environment
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        As an expert optimization consultant, provide a very brief (2-3 sentences) initial perspective on the following problem. 
        Identify potential mathematical techniques (e.g., MILP, Meta-heuristics, Queueing Theory) and what data might be needed.
        Keep it encouraging and professional.
        
        Problem: ${description}
      `,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I've reviewed your problem. It looks like a classic optimization challenge that we can certainly help refine and solve.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
