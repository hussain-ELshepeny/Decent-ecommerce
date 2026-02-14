"use client"
import { useEffect } from "react"
import SidebarFooter from "./SidebarFooter"
import SidebarLinks from "./SidebarLinks"
import SidebarHeader from "./SidebarHeader"
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
    // esc to close the side bar (not important)
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
        onClick={() => setIsOpen(false)} // close the sidebar
        aria-hidden="true"
      />

      {/*  Sidebar  */}
      <aside
        className={`fixed top-0 right-0 h-full z-50 bg-white shadow-2xl 
          transition-transform duration-300 ease-in-out transform
          w-[85vw] max-w-[320px] 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <SidebarHeader setIsOpen={setIsOpen} />

          <SidebarLinks setIsOpen={setIsOpen} />

          <SidebarFooter />
        </div>
      </aside>
    </>
  )
}

export default Sidebar
