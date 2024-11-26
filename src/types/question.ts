import { z } from "zod";

export const QuestionSchema = z.object({
  question: z.string(),
  answers: z.array(z.string()).nonempty(),
  correctAnswers: z.array(z.string()).nonempty(),
  prize: z.number(),
});

export type Question = z.infer<typeof QuestionSchema>;
