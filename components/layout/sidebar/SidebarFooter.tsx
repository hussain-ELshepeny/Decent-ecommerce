import { useSession } from "next-auth/react"
import { useAuthActions } from "@/app/(features)/auth/_hooks/useAuthActions"
import Link from "next/link"
export default function SidebarFooter() {
  const { logout } = useAuthActions()
  const session = useSession()
  if (session?.data?.user && session.status === "authenticated")
    return (
      <div className="mt-auto pt-6 border-t">
        <button
          onClick={logout}
          className="
    w-full py-3
    bg-brandDark
    text-brandLight
    font-medium
    rounded-lg
    transition
    hover:bg-brandGold
    hover:text-brandDark
  "
        >
          Logout
        </button>
      </div>
    )
  else
    return (
      <div className="mt-auto pt-6 border-t">
        <Link
          href={"/auth/login"}
          className="
          text-center
          block
          w-full py-3
          border border-brandBorder
          text-heading
          font-medium
          rounded-lg
          transition
          hover:bg-brandLight
          hover:border-brandGold
          "
        >
          Login
        </Link>
      </div>
    )
}
