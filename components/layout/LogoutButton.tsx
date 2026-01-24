"use client"
import { useAuthActions } from "../../app/(features)/auth/_hooks/useAuthActions"
import { RiLogoutBoxRLine } from "react-icons/ri"

export default function LogoutButton({
  className = "",
}: {
  className: string
}) {
  const { logout } = useAuthActions()

  return (
    <button
      onClick={logout}
      className={`hover:text-brandGold hover:cursor-pointer transition-colors ${className} flex items-center`}
    >
      <RiLogoutBoxRLine />
    </button>
  )
}
