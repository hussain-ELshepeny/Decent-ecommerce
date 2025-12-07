// /app/(features)/auth/auth-config.ts

import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import * as bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (passwordMatch) {
          return user
        } else {
          return null
        }
      },
    }),
  ],

  // 3. إعداد الجلسة (Session): استخدام JWT لتمكين Server Actions
  session: {
    strategy: "jwt",
  },

  // 4. Callbacks: تعديل محتوى الـToken والـSession
  callbacks: {
    // يشتغل بعد المصادقة لـJWT
    async jwt({ token, user }) {
      if (user) {
        // إضافة بيانات مهمة (مثل الـID والدور/Role) إلى الـToken
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    // يشتغل كلما تم طلب Session لـClient
    async session({ session, token }) {
      if (token && session.user) {
        // تمرير البيانات المضافة من الـToken إلى كائن الـSession
        session.user.role = token.role as string
        session.user.id = token.id as string
      }
      return session
    },
  },

  // 5. صفحات مخصصة
  pages: {
    signIn: "/login", // سيتم توجيه المستخدمين إلى هذه الصفحة عند محاولة الوصول لصفحة محمية
  },

  // 6. مفتاح سري
  secret: process.env.NEXTAUTH_SECRET,
}

// **لا تنسَ توسيع أنواع NextAuth في ملف .d.ts لكي يتعرف على role و id في الـSession**
