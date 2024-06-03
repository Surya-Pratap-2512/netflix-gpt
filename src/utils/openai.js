import OpenAI from "openai";
import Constants from "./Constants";

export const openai = new OpenAI({
  apiKey: Constants.openai.key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
