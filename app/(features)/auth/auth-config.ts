
import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import * as bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
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
    async jwt({ token, user }) {
      if (user) {
        // إضافة بيانات مهمة (مثل الـID والدور/Role) إلى الـToken
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        // تمرير البيانات المضافة من الـToken إلى كائن الـSession
        session.user.role = token.role as "USER" | "ADMIN"
        session.user.id = token.id as string
      }
      return session
    },
  },

  pages: {
    signIn: "/auth/login", // سيتم توجيه المستخدمين إلى هذه الصفحة عند محاولة الوصول لصفحة محمية
  },

  secret: process.env.NEXTAUTH_SECRET,
}
