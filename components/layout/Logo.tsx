import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="inline-block text-2xl font-extrabold  px-3 py-1 bg-clip-text"
    >
      <span>Decent</span>
    </Link>
  )
}
