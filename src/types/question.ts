import { z } from "zod";

export const QuestionSchema = z.object({
  question: z.string().min(10),
  answers: z.array(z.string()).min(4),
  correctAnswers: z.array(z.string()).min(1),
  prize: z.number().int().positive(),
});

export type Question = z.infer<typeof QuestionSchema>;
