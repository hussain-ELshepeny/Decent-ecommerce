import { CartState, CartAction } from "../_types/cart-types"
export const initialCartState: CartState = {
  items: [],
}

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "HYDRATE_FROM_STORAGE":
      return { ...state, ...action.payload }

    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.productId === action.payload.productId)
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }

    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }

    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.productId === action.payload ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.productId !== action.payload),
      }

    case "CLEAR_CART":
      return { items: [] }

    default:
      return state
  }
}
