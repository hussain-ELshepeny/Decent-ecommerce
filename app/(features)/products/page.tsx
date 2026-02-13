import { getProducts } from "./_actions/get-products"
import Filters from "./_components/Filters"
import Pagination from "./_components/Pagination"
import ProductsList from "./_components/ProductsList"
import { searchParamsCache } from "@/lib/searchParams"
import { SortDropDown } from "./_components/SortDropDown"
import { CiFilter } from "react-icons/ci"
import Sort from "./_components/Sort"
import FilterSideBar from "./_components/FilterSideBar"

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  // 1. we must await the params
  const resolvedParams = await searchParams
  console.log(resolvedParams)

  // 2. parse the values
  const { page, q, category, sort } = searchParamsCache.parse(resolvedParams)

  // 3. send all the filter values to the get products action
  const { products, totalPages } = await getProducts({
    page,
    limit: 8,
    q,
    category,
    sort,
  })

  return (
    <section className="section-container mt-20">
      <div className="container mx-auto py-10">
        {/* Sort & filter side bar */}
        <div className="flex justify-between items-center md:justify-end md:px-6 mb-3">
          {/* ss */}
          <FilterSideBar />
          <Sort />
        </div>
        <div className="flex gap-6">
          <Filters variant="desktop" />

          <ProductsList products={products} />
        </div>
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  )
}
