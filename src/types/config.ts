import z from "zod";
import { QuestionSchema } from "./question";

export const ConfigSchema = z.object({
  questions: z.array(QuestionSchema).nonempty().length(12),
  responseDelay: z.number().int().positive(),
});

export type Config = z.infer<typeof ConfigSchema>;
