"use client"
import { useQueryState, parseAsInteger } from "nuqs"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  )

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-gray-200 disabled:opacity-50 rounded"
      >
        Previous
      </button>

      <span className="py-2">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-200 disabled:opacity-50 rounded"
      >
        Next
      </button>
    </div>
  )
}
