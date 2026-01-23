"use server"
import { registerSchema } from "@/app/(features)/auth/_validation/authSchemas"

import prisma from "@/lib/prisma"
import * as bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

export async function credentialsRegister(prevState: any, formData: FormData) {
  // 1. التحقق من البيانات على السيرفر (Server-side Validation)
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const accountType = formData.get("accountType") as "user" | "vendor"

  const validatedFields = registerSchema.safeParse({
    name,
    email,
    password,
    accountType,
  })

  // const validatedFields = registerSchema.safeParse(formData)

  if (!validatedFields.success) {
    // إرجاع أخطاء Zod إلى الـFrontend
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "فشل التحقق من البيانات المدخلة.",
    }
  }

  const {
    name: validatedName,
    email: validatedEmail,
    password: validatedPassword,
    accountType: validatedAccountType,
  } = validatedFields.data
  // know we will continue based on that they are compatible with the schema
  try {
    // check if the user is already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedEmail },
    })

    if (existingUser) {
      return {
        message: "The Email is already used before .",
      }
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(validatedPassword, 10)

    // creating the user in the db
    await prisma.user.create({
      data: {
        name: validatedName,
        email: validatedEmail,
        password: hashedPassword, // store the hashed password
        // adding the role
        role: validatedAccountType === "vendor" ? "ADMIN" : "USER",
      },
    })
  } catch (error) {
    // handle any error
    console.error("REGISTER_ACTION_ERROR:", error)
    return { message: "Failed to create an account, Please try again ." }
  }

  // redirect
  redirect("/auth/login")
}
