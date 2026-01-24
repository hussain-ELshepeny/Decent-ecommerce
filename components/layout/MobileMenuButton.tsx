// components/layout/MobileMenuBtn.tsx
"use client"
import { FiMenu } from "react-icons/fi"

export default function MobileMenuBtn() {
  return (
    <button
      onClick={() => {
        console.log("Open Sidebar")
      }}
      className="text-gray-300 hover:text-brandGold"
    >
      <FiMenu />
    </button>
  )
}
