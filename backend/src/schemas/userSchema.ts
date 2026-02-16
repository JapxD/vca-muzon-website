import { z } from "zod";

export const userSchema = z.object({
  firstname: z.string().min(2, "Name must be at least 2 characters"),
  lastname: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email format"),
  role: z
    .enum(["admin", "user", "leader", "finance"])
    .refine((val) => ["admin", "user", "leader", "finance"].includes(val), {
      message: "Role must be either 'admin', 'user', 'leader', or 'finance'",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});

// Infer TypeScript type
export type UserInput = z.infer<typeof userSchema>;
