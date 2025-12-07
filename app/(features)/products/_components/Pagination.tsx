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
      <Link href={`?page=${prev}`} className="px-4 py-2 bg-gray-200 rounded">
        Prev
      </Link>

      <span className="px-4 py-2 bg-gray-100 rounded">
        {page} / {totalPages}
      </span>

      <Link href={`?page=${next}`} className="px-4 py-2 bg-gray-200 rounded">
        Next
      </Link>
    </div>
  )
}
