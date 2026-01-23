"use client"
import Link from "next/link"

export default function Pagination({
  page,
  totalPages,
}: {
  page: number
  totalPages: number
}) {
  const prev = page > 1 ? page - 1 : 1
  const next = page < totalPages ? page + 1 : totalPages

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <Link
        href={`?page=${prev}`}
        className="inline-flex items-center px-3 py-1.5 border border-[#EDEEF5] bg-white text-sm font-medium text-gray-800  shadow-sm hover:bg-gray-50 transition"
      >
        Prev
      </Link>

      <span className="inline-flex items-center px-3 py-1.5 border border-[#EDEEF5] bg-white text-sm font-medium text-gray-700  shadow-sm">
        {page} / {totalPages}
      </span>

      <Link
        href={`?page=${next}`}
        className="inline-flex items-center px-3 py-1.5 border border-[#EDEEF5] bg-white text-sm font-medium text-gray-800  shadow-sm hover:bg-gray-50 transition"
      >
        Next
      </Link>
    </div>
  )
}
