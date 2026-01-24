import { Product } from "@prisma/client"
import ProductCard from "./ProductCard"
export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:gap-6 gap-3  md:px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
