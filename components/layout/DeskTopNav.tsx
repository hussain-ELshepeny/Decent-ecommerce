"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DeskTopNav() {
  const pathname = usePathname()

  const getLinkStyle = (href: string) => {
    const isActive = pathname === href
    return `transition-colors pb-1 border-b-2 ${
      isActive
        ? "text-brandGold border-brandGold"
        : "text-gray-300 border-transparent hover:text-brandGold"
    }`
  }

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Policies",
      href: "/policies",
    },
  ]
  return (
    <nav className="hidden md:flex space-x-8 text-sm font-medium">
      {navLinks.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={getLinkStyle(link.href)}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
