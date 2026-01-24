import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { getServerSession } from "next-auth"
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi"
import { authOptions } from "@/app/(features)/auth/auth-config"
export default async function NavButtons() {
  const session = await getServerSession(authOptions)
  const navActions = [
    {
      type: "link",
      href: "/profile",
      icon: FiUser,
    },
    {
      type: "button",
      href: "/profile",
      icon: FiHeart,
    },
    {
      type: "link",
      href: "/cart",
      icon: FiShoppingCart,
      badge: 2,
    },
    {
      type: "button",
      href: "/profile",
      icon: FiMenu,
      className: "md:hidden",
    },
  ]
  return (
    <div className="flex items-center space-x-6 text-gray-300">
      <button className="hover:text-brandGold transition-colors">
        <FiSearch size={20} />
      </button>

      {session?.user ? (
        <>
          {navActions.map((link, index) => {
            return (
              <Link href={link.href} key={index} className={link.className}>
                {<link.icon />}
              </Link>
            )
          })}
          <LogoutButton />
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="hover:text-brandGold transition-colors"
          >
            Login
          </Link>
        </>
      )}
    </div>
  )
}
