"use client"
import { useState } from "react"
import { CiFilter } from "react-icons/ci"
import Filters from "./Filters"

export default function FilterSideBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center gap-2 px-2 py-2 bg-primary/10 text-primary rounded-xl font-semibold font-body hover:bg-primary/20 transition-all  hover:cursor-pointer"
      >
        <CiFilter className="text-xl" />
        <span>Filters</span>
      </button>
      {/*  Backdrop  */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // close the sidebar
        aria-hidden="true"
      />
      <Filters variant="mobile" isOpen={isOpen} />
    </>
  )
}
