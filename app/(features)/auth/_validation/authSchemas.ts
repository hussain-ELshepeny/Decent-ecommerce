import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "email is not typed correctly" }),
  password: z.string().min(1, {
    message: "Password is a must",
  }),
})

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "email is not typed correctly" }),
  password: z.string(),
  accountType: z.enum(["customer", "vendor"], {
    message: "Please select an account type",
  }),
})

export type LoginFormType = z.infer<typeof loginSchema>
export type RegisterFormType = z.infer<typeof registerSchema>
// search for effect
