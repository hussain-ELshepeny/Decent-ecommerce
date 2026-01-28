"use client"

import { useEffect } from "react"
import { IoMdClose } from "react-icons/io"
type SideBarProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}
const Sidebar = ({ isOpen, setIsOpen }: SideBarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    // esc to close the side bar
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  return (
    <>
      {/*  Backdrop  */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // close the side bar
        aria-hidden="true"
      />

      {/*  Sidebar  */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-white shadow-2xl 
          transition-transform duration-300 ease-in-out transform
          w-[85vw] max-w-[320px] 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            {/* <h2 className="text-xl font-bold text-gray-800">My App</h2> */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full hover:text-brandGoldHover hover:cursor-pointer text-black"
            >
              <IoMdClose size={19} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4">
            {["Home", "Products", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t">
            <button className="w-full py-3 bg-red-50 text-red-600 font-semibold rounded-lg">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
