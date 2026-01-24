import Link from "next/link"
import Nav from "./Nav"
import DeskTopNav from "./DeskTopNav"
import SearchButton from "../shared/SearchButton"
import MobileMenuBtn from "./MobileMenuButton"

export default function Header() {
  const ICON_STYLE =
    "hover:text-brandGold transition-colors text-[18px] md:text-[21px] hover:cursor-pointer"
  return (
    <header className="bg-brandDark text-white sticky top-0 z-50 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className={`${ICON_STYLE} block md:hidden`}>
            <SearchButton />
          </div>

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
          <div className={`${ICON_STYLE} md:hidden`}>
            <MobileMenuBtn />
          </div>

          <DeskTopNav />

          <Nav />
        </div>
      </div>
    </header>
  )
}
