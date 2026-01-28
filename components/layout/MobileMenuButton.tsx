"use client"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import Sidebar from "./sidebar/SideBar"

export default function MobileMenuBtn() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-gray-300 hover:text-brandGold hover:cursor-pointer"
      >
        <FiMenu />
      </button>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
