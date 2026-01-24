import Link from "next/link"

export default function HeaderLogo() {
  return (
    <Link href={"/"} className="shrink-0 flex items-center">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold tracking-wider text-brandGold">
          DECENT
        </h1>
        <span className="block text-[10px] tracking-[0.2em] text-gray-300 uppercase -mt-1]">
          Mens Wear
        </span>
      </div>
    </Link>
  )
}
