import Link from "next/link"

export default function CategoryBox({
  title,
  imageSrc,
}: {
  title: string
  imageSrc: string
}) {
  return (
    <div className="relative h-[400px] bg-gray-200 group overflow-hidden cursor-pointer">
      {/* maybe i will use search params to send the user to all products page and filter automatically */}
      <Link href={"/"}>
        <img
          src={imageSrc}
          alt="Formal"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-center">
          <h3 className="text-white text-3xl font-bold uppercase tracking-wider mb-2">
            {title}
          </h3>
          <span className="text-white text-sm border-b border-white pb-1">
            Shop Now
          </span>
        </div>
      </Link>
    </div>
  )
}
