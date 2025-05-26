import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  ACCESS_TOKEN: z.string().min(1),
  API_URL: z.string().url(),
  PORT: z.string().optional(),
});

export const parsedEnv = envSchema.parse(process.env);
