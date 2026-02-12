"use client"
import { useQueryState, parseAsInteger } from "nuqs"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  )

  console.log(page)
  const NAVBUTTONS =
    "px-4 py-2  disabled:opacity-50 rounded-full bg-white hover:cursor-pointer"

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className={`${NAVBUTTONS} ${page === 1 ? `invisible` : `visible`}`}
      >
        <FaArrowLeft />
      </button>

      <span className="py-2">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        className={`${NAVBUTTONS}`}
      >
        <FaArrowRight />
      </button>
    </div>
  )
}
