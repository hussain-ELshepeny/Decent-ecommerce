import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { getServerSession } from "next-auth"
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi"
import { authOptions } from "@/app/(features)/auth/auth-config"
import SearchButton from "../shared/SearchButton"

export default async function NavButtons() {
  const session = await getServerSession(authOptions)

  const ICON_STYLE =
    "hover:text-brandGold hover:cursor-pointer transition-colors text-[18px] md:text-[19px] hover:cursor-pointer"
  const DESKTOP_ONLY = "hidden md:block"

  return (
    <div
      className={`hidden md:flex items-center space-x-3 md:space-x-6 text-gray-300 `}
    >
      {/* search button */}
      <div className={`hidden md:flex ${ICON_STYLE}  items-center`}>
        <SearchButton />
      </div>

      {session?.user ? (
        <>
          <Link href="/profile" className={`${ICON_STYLE} ${DESKTOP_ONLY}`}>
            <FiUser />
          </Link>

          <Link href="/wishlist" className={`${ICON_STYLE} ${DESKTOP_ONLY}`}>
            <FiHeart />
          </Link>

          <Link
            href="/cart"
            className={`${ICON_STYLE} ${DESKTOP_ONLY} relative`}
          >
            <FiShoppingCart />
          </Link>

          <div className={DESKTOP_ONLY}>
            <LogoutButton className={`${ICON_STYLE}`} />
          </div>
        </>
      ) : (
        <Link href="/auth/login" className={`text-sm ${ICON_STYLE}`}>
          Login
        </Link>
      )}
    </div>
  )
}
