"use client"
import { useCart } from "../_hooks/useCart"
import { CartItem } from "../_types/cart-types"
import { addToCart } from "../_actions/cart-actions"
import { useSession } from "next-auth/react"
import { Product } from "@prisma/client"
interface AddToCartButtonProps {
  product: Product
  inStock: boolean
}

export function AddToCartButton({ product, inStock }: AddToCartButtonProps) {
  // const { items, addItem } = useCart()
  const { data: session } = useSession()
  async function handleClick() {
    if (!session) {
      alert("You must login")
      return
    }
    await addToCart(product?.id)
  }
  return (
    <button
      onClick={handleClick}
      disabled={!inStock}
      className={`flex items-center justify-center py-2 px-3  font-semibold text-sm transition-all duration-150 ${
        inStock
          ? "bg-brandDark text-white hover:bg-brandGoldHover hover:text-black active:scale-95"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      {inStock ? "Add to Cart" : "Unavailable"}
    </button>
  )
}
