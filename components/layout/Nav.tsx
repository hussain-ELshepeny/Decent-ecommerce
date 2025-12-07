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
  console.log(session)

  return (
    <div className="flex items-center space-x-6 text-gray-300">
      <button className="hover:text-brandGold transition-colors">
        <FiSearch size={20} />
      </button>

      {session?.user ? (
        <>
          <Link
            href={"/profile"}
            className="hover:text-brandGold transition-colors"
          >
            <FiUser size={20} />
          </Link>
          <button className="hover:text-brandGold transition-colors">
            <FiHeart size={20} />
          </button>
          <Link
            href={"/cart"}
            className="relative hover:text-brandGold transition-colors"
          >
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-brandGold text-brandDark text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          <button className="md:hidden hover:text-brandGold transition-colors">
            <FiMenu size={24} />
          </button>
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
