import { z } from "zod";

export const RegisterSchema = z
  .object({
    displayName: z
      .string()
      .min(1, { error: "Name is required" })
      .max(50, { error: "Name is too long. Max length is 50 characters" }),

    email: z.email({
      error: "Email is invalid",
    }),

    password: z.string().min(6, {
      error: "Password must be at least 6 characters long",
    }),

    passwordRepeat: z.string().min(6, {
      error: "Password repeat must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    error: "Passwords do not match",
    path: ["passwordRepeat"],
  });

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>;
