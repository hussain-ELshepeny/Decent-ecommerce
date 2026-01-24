import Link from "next/link"
import Nav from "./Nav"
import DeskTopNav from "./DeskTopNav"

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

          <DeskTopNav />

          <Nav />
        </div>
      </div>
    </header>
  )
}
