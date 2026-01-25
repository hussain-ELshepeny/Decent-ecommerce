import { useState } from "react"
// import ProductDialog from "../shared/ProductDialog"
import { AddToCartButton } from "../../cart/_components/AddToCartButton"
import { Product } from "@prisma/client"
export default function SliderProductCard({ product }: { product: Product }) {
  // const [open, setOpen] = useState(false)
  return (
    <div
      // onClick={() => setOpen((open) => !open)}
      className=" h-full border-gray-300 bg-white"
    >
      <div className="flex flex-col gap-2 justify-between h-full">
        {/* why lazy */}
        <img
          src={product?.image || ""}
          alt="product"
          loading="lazy"
          // className="flex-1"
        />
        {/* <div className="px-3 flex flex-col"> */}
        <div className=" mx-1 mt-4 flex flex-col ">
          <h3 className="pl-1 text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
          <p className=" pl-1 mt-1 text-sm font-medium text-gray-500">
            ${product.price}
          </p>
          <AddToCartButton
            product={product}
            inStock={Boolean(product?.stock)}
          />
        </div>
        {/* </div> */}
        {/* <ProductDialog open={open} setOpen={setOpen} product={product} /> */}
      </div>
    </div>
  )
}
