import CartItemRow from "./CartItemRow"
import { getCart } from "../_actions/cart-actions"
import Link from "next/link"
export default async function CartItemList() {
  const items = await getCart()
  console.log(items)
  if (items.length > 0)
    return (
      <div className="bg-transparent space-y-4">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>
    )

  return (
    <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
      <p className="text-gray-500 mb-4">Your cart is empty.</p>
      <Link href={"/"} className="text-brand-gold font-bold hover:underline">
        Continue Shopping
      </Link>
    </div>
  )
}
