"use client"
import { usePathname } from "next/navigation"

interface ConditionalLayoutProps {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
}
export default function ConditionalLayout({
  children,
  header,
  footer,
}: ConditionalLayoutProps) {
  const pathname = usePathname()

  const authPaths = ["/auth/login", "/auth/register"]
  const isAuthPage = authPaths.includes(pathname)

  return (
    <>
      {!isAuthPage && header}
      <main className="min-h-screen flex flex-col">{children}</main>
      {!isAuthPage && footer}
    </>
  )
}
