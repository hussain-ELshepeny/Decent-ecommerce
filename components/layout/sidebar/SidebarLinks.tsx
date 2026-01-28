"use client"
import Link from "next/link"
type SidebarLinksProps = {
  setIsOpen: (value: boolean) => void
}
export default function SidebarLinks({ setIsOpen }: SidebarLinksProps) {
  const SIDEBAR_NAV_LINKS = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Products", href: "/products" },
    { id: 3, label: "Policies", href: "/policies" },
    { id: 4, label: "Cart", href: "/cart" },
    // { id: 5, label: "Home", href: "/" },
    // { id: 6, label: "Home", href: "/" },
  ]
  return (
    <nav className="flex flex-col gap-4">
      {SIDEBAR_NAV_LINKS.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="text-lg font-medium text-brandDark hover:text-brandGold transition-colors py-2 border-b border-gray-300"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
