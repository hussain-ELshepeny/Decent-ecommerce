import { getBestSellers, getProducts } from "../_actions/get-products"
import ProductsSlider from "./ProductSlider"
import SectionHeader from "@/components/SectionHeading"
export default async function BestSellers() {
  const products = await getBestSellers()

  return (
    <div className="section-container my-(--section-margin)">
      <SectionHeader title={"Best Sellers"} />
      <ProductsSlider products={products} />
    </div>
  )
}
