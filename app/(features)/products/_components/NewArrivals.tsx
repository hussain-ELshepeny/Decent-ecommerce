import SectionHeader from "@/components/SectionHeading"
import { getNewArrivals } from "../_actions/get-products"
import NewArrivalProduct from "./NewArrivalProducts"
export default async function NewArrivals() {
  const newArrivalProducts = await getNewArrivals()
  console.log(newArrivalProducts)
  return (
    <section className="section-container my-20">
      <SectionHeader title="New Arrivals" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {newArrivalProducts.map((product) => (
          <NewArrivalProduct key={product.name} product={product} />
        ))}
      </div>
    </section>
  )
}
