import Link from "next/link"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="bg-brandDark text-white sticky top-0 z-50 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 flex items-center">
            <div className="text-center">
              <h1 className="text-2xl font-serif font-bold tracking-wider text-brandGold">
                DECENT
              </h1>
              <span className="block text-[10px] tracking-[0.2em] text-gray-300 uppercase -mt-1]">
                Mens Wear
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <Link
              href="/"
              className="hover:text-brandGold transition-colors border-b-2 border-brandGold pb-1"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-brandGold transition-colors border-b-2 border-brandGold pb-1"
            >
              Products
            </Link>
            {/* <button className="text-white">Categories</button> */}
            <button className=" text-white hover:text-brandGold transition-colors">
              About
            </button>
          </nav>

          <Nav />
        </div>
      </div>
    </header>
  )
}
