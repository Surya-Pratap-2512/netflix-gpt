import { HfInference } from "@huggingface/inference";
import Constants from "../utils/Constants";

const inference = new HfInference(Constants.huggingface.key);

export const getMovieRecommendation = async (query) => {
  const out = await inference.chatCompletion({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      {
        role: "user",
        content: query,
      },
    ],
    max_tokens: 100,
  });
  return out;
};
