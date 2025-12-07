"use client"
import Image from "next/image"
import { Product } from "@/app/generated/prisma"
import { AddToCartButton } from "../../cart/_components/AddToCartButton"

export default function ProductCard({ product }: { product: Product }) {
  const inStock = product?.stock >= 1
  // هل ده صح ؟
  const localProduct = {
    productId: product.id,
    quantity: 1,
    image: product.image,
    price: product.price,
    name: product.name,
  }
  return (
    <div className="relative bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-colors duration-150 overflow-hidden flex flex-col h-full">
      {/* image */}
      <div className="flex items-center justify-center w-full h-48 bg-white overflow-hidden group">
        <img
          src={product?.image}
          alt={product?.name}
          // width={400}
          // height={400}
          className="max-w-full max-h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* content */}
      <div className="px-4 py-3 flex flex-col flex-grow">
        <h3 className="text-xs uppercase font-semibold text-gray-800 mb-2 line-clamp-2">
          {product?.name}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <span className="text-black-500 font-bold text-lg">
            {product?.price} <span className="text-sm">EGP</span>
          </span>
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
              inStock ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* action row: Add to Cart + wishlist icon */}
        <div className="mt-auto flex items-center gap-3">
          <AddToCartButton product={product} inStock={inStock} />
          <button
            type="button"
            aria-label="Add to wishlist"
            className="w-10 h-10 flex-shrink-0 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21s-7-4.434-9.182-7.09A5.5 5.5 0 0 1 6.5 3c1.74 0 3.06.87 3.5 2.09C10.94 3.87 12.26 3 14 3a5.5 5.5 0 0 1 3.682 10.91C19 16.566 12 21 12 21z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
