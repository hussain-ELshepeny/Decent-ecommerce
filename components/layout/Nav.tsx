import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { getServerSession } from "next-auth"
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi"
import { authOptions } from "@/app/(features)/auth/auth-config"
import SearchButton from "../shared/SearchButton"

export default async function NavButtons() {
  const session = await getServerSession(authOptions)

  return (
    <div
      className={`hidden md:flex items-center space-x-3 md:space-x-6 text-gray-300`}
    >
      {/* search button */}
      <div className={`hidden md:flex nav-icon  items-center`}>
        <SearchButton />
      </div>

      {session?.user ? (
        <>
          <Link href="/profile" className={`nav-icon desktop-only`}>
            <FiUser />
          </Link>

          <Link href="/wishlist" className={`nav-icon desktop-only`}>
            <FiHeart />
          </Link>

          <Link href="/cart" className={`nav-icon desktop-only relative`}>
            <FiShoppingCart />
          </Link>

          <div className="desktop-only">
            <LogoutButton className={`nav-icon`} />
          </div>
        </>
      ) : (
        <Link href="/auth/login" className={`text-sm nav-icon`}>
          Login
        </Link>
      )}
    </div>
  )
}
