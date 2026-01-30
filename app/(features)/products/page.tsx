// import { getProducts } from "./_actions/get-products"
// import Filters from "./_components/Filters"
// import Pagination from "./_components/Pagination"
// import ProductsList from "./_components/ProductsList"
// type PageProps = {
//   searchParams: { [key: string]: string | string[] | undefined }
// }
// export default async function page({ searchParams }: { searchParams: any }) {
//   const { page: pageParam = 1 } = await searchParams
//   const page = Number(pageParam)
//   const { products, totalPages } = await getProducts(page, 8)
//   return (
//     <section className="section-container">
//       <div className="container mx-auto py-10">
//         <Filters />
//         <ProductsList products={products} />
//         <Pagination page={page} totalPages={totalPages} />
//       </div>
//     </section>
//   )
// }

// page.tsx
import { getProducts } from "./_actions/get-products"
import Filters from "./_components/Filters"
import Pagination from "./_components/Pagination"
import ProductsList from "./_components/ProductsList"
import { searchParamsCache } from "@/lib/searchParams"

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  // 1. we must await the params
  const resolvedParams = await searchParams

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
    <section className="section-container">
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-6">
          <Filters />

          <ProductsList products={products} />

          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </section>
  )
}
