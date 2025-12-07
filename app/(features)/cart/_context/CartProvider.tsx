"use client"

import { createContext, useEffect, useReducer, useState } from "react"
import { cartReducer, initialCartState } from "./cartReducer"
import { CartContextType } from "../_types/cart-types"
export const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  // مهم جدًا علشان الـ SSR → نمنع مشكلة Hydration mismatch
  const [isHydrated, setIsHydrated] = useState(false)

  // نحمل الداتا من localStorage أول ما الصفحة تفتح
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")

    if (storedCart) {
      dispatch({
        type: "HYDRATE_FROM_STORAGE",
        payload: JSON.parse(storedCart),
      })
    }

    setIsHydrated(true)
  }, [])

  // أي تغيير يحصل في cart يتسجل في localStorage
  useEffect(() => {
    if (isHydrated) {
      // here the state will be set for the first time i guess
      localStorage.setItem("cart", JSON.stringify(state))
      // console.log(localStorage.getItem("cart"))
    }
  }, [state, isHydrated])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
