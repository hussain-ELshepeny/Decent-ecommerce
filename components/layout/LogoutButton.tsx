"use client"
import { useAuthActions } from "../../app/(features)/auth/_hooks/useAuthActions"

import { RiLogoutBoxRLine } from "react-icons/ri"

export default function LogoutButton() {
  const { logout } = useAuthActions()

  return (
    <button onClick={logout} className="hover:text-brandGold transition-colors">
      <RiLogoutBoxRLine size={20} />
    </button>
  )
}
