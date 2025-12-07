export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string | undefined
}

export type ServerCartItem = {
  productId: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export type CartAction =
  | { type: "HYDRATE_FROM_STORAGE"; payload: CartState }
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string } // id
  | { type: "INCREASE_QTY"; payload: string } // id
  | { type: "DECREASE_QTY"; payload: string } // id
  | { type: "CLEAR_CART" }

export interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}
