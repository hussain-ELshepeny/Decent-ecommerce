import { getProducts } from "./_actions/get-products"
import Pagination from "./_components/Pagination"
import ProductsList from "./_components/ProductsList"

export default async function page({ searchParams }: { searchParams: any }) {
  const { page: pageParam = 1 } = await searchParams
  const page = Number(pageParam)
  const { products, totalPages } = await getProducts(page, 12)
  return (
    <section className="section-container">
      <div className="container mx-auto py-10">
        <ProductsList products={products} />
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </section>
  )
}
