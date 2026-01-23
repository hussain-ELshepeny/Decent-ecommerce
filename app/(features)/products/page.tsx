import { getProducts } from "./_actions/get-products"
import Filters from "./_components/Filters"
import Pagination from "./_components/Pagination"
import ProductsList from "./_components/ProductsList"

export default async function page({ searchParams }: { searchParams: any }) {
  const { page: pageParam = 1 } = await searchParams
  const page = Number(pageParam)
  const { products, totalPages } = await getProducts(page, 8)
  return (
    <section className="section-container">
      <div className="container mx-auto py-10">
        <Filters />
        <ProductsList products={products} />
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </section>
  )
}
