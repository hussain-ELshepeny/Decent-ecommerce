import { useContext, useMemo } from "react"
import { CartContext } from "../_context/CartProvider"
import { CartItem } from "../_types/cart-types"

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside <CartProvider>")

  const { state, dispatch } = context
  const { items } = state

  const totalItems: number = useMemo(
    () => items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0),
    [items]
  )

  const totalPrice: number = useMemo(
    () =>
      items.reduce(
        (acc: number, item: CartItem) => acc + item.price * item.quantity,
        0
      ),
    [items]
  )

  const addItem = (product: CartItem) =>
    dispatch({ type: "ADD_ITEM", payload: product })
  const removeItem = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id })
  const increaseQty = (id: string) =>
    dispatch({ type: "INCREASE_QTY", payload: id })
  const decreaseQty = (id: string) =>
    dispatch({ type: "DECREASE_QTY", payload: id })
  const clearCart = () => dispatch({ type: "CLEAR_CART" })

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
    clearCart,
  }
}
