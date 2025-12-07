import SectionHeader from "@/components/SectionHeading"
import { getProducts } from "../_actions/get-products"
import NewArrivalProduct from "./NewArrivalProducts"
export default async function NewArrivals() {
  const { products: newArrivalProducts } = await getProducts(3, 3)
  return (
    <section className="section-container my-20">
      <SectionHeader title="New Arrivals" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {newArrivalProducts.map((product) => (
          <NewArrivalProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
