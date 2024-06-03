import { openai } from "../utils/openai";

export const getMovieRecommendation = async (query) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
};
