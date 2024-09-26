import { GoogleGenerativeAI } from "@google/generative-ai";
import { secret } from "encore.dev/config";

const googleApi = secret("GEMINI_API_KEY")

export const googleGenAI = new GoogleGenerativeAI(googleApi())