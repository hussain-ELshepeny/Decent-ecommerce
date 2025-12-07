// types/next-auth.d.ts

import { DefaultSession } from "next-auth"
// تأكد من استيراد الـRole Enum من Prisma Client الخاص بك
import { Role } from "@prisma/client"

// 1. توسيع أنواع الـSession
declare module "next-auth" {
  interface Session {
    user: {
      id: string // 👈 إضافة الـID
      role: Role // 👈 إضافة الـRole
    } & DefaultSession["user"] // للدمج مع الخصائص الافتراضية
  }

  interface User {
    id: string // 👈 إضافة الـID لكائن User الذي يرجع من الـDB
    role: Role // 👈 إضافة الـRole
  }
}

// 2. توسيع أنواع الـJWT Token
declare module "next-auth/jwt" {
  interface JWT {
    id: string // 👈 إضافة الـID
    role: Role // 👈 إضافة الـRole
  }
}

// import NextAuth, { DefaultSession } from "next-auth"

// declare module "next-auth" {
//   interface User {
//     id: string
//     role?: string
//   }

//   interface Session {
//     user: {
//       id: string
//       role?: string
//     } & DefaultSession["user"]
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string
//     role?: string
//   }
// }
