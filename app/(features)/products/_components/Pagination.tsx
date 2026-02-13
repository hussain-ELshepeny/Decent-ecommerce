"use client"
import { useQueryState, parseAsInteger } from "nuqs"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  )

  console.log(page)
  const NAVBUTTONS =
    "px-2 py-2 disabled:opacity-50 rounded-full  hover:cursor-pointer"

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className={`${NAVBUTTONS} ${page === 1 ? `invisible` : `visible`}`}
      >
        <MdKeyboardArrowLeft size={27} />
      </button>

      <span className="py-2">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        className={`${NAVBUTTONS}`}
      >
        <MdKeyboardArrowRight size={27} />
      </button>
    </div>
  )
}
