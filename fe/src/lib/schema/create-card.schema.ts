"use client";

import { z } from "zod";

export const CreateCardSchema = z.object({
  question: z.string().min(2).max(50),
  answer: z.string().min(2).max(50),
});

export type ICreateCardSchema = z.infer<typeof CreateCardSchema>;

export const CreateCardSchemaDefaults: ICreateCardSchema = {
  question: "",
  answer: "",
};
