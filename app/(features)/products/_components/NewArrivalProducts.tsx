import { CiHeart } from "react-icons/ci"
import { Product } from "@prisma/client"
export default function NewArrivalProduct({ product }: { product: Product }) {
  console.log(product)
  return (
    <div className="group relative flex flex-col">
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
        <img
          src={product.image || ""}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors">
          <CiHeart className="w-4 h-4" />
        </button>
        {/* {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide">
            {product.badge}
          </span>
        )} */}
      </div>
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-500">
          ${product.price}
        </p>
      </div>
    </div>
  )
}
