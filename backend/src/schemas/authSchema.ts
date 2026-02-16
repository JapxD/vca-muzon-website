import { z } from "zod";

export const authSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Infer TypeScript type
export type AuthInput = z.infer<typeof authSchema>;
