import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email({
    error: "Email is invalid",
  }),

  password: z.string().min(6, {
    error: "Password must be at least 6 characters long",
  }),
});

export type TypeLoginSchema = z.infer<typeof LoginSchema>;
