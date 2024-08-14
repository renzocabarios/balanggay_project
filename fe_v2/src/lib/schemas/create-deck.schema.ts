import { z } from "zod";

export const CreateDeckSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
});

export type ICreateDeckSchema = z.infer<typeof CreateDeckSchema>;

export const CreateDeckSchemaDefaults: ICreateDeckSchema = {
  name: "",
  description: "",
};
