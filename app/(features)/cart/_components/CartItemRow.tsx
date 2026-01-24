"use client"
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi"
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../_actions/cart-actions"
import { CartItemWithProduct } from "../_types/cart-types"
export default function CartItemRow({ item }: { item: CartItemWithProduct }) {
  async function handleIncrease(id: string) {
    await increaseItem(id)
  }
  async function handleDecrease(id: string) {
    await decreaseItem(id)
  }
  async function handleRemove(id: string) {
    await removeItem(id)
  }
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-100">
      {/* Product Image */}
      <div className="shrink-0 w-full sm:w-24 h-32 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
        <img
          src={item?.product?.image || ""}
          alt={item?.product?.name}
          className="w-full h-full object-cover object-center mix-blend-multiply"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow sm:ml-6 flex flex-col justify-between h-full w-full">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-base font-bold text-gray-900 font-sans">
              {item?.product?.name}
            </h3>
            {/* Mobile trash icon could go here, but design has it right aligned in row */}
          </div>
        </div>
      </div>

      {/* Controls & Price */}
      <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-8 mt-4 sm:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center bg-gray-100 rounded-md">
          <button
            onClick={() => handleDecrease(item.productId)}
            disabled={item?.quantity <= 1}
            className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-30"
          >
            <FiMinus size={14} />
          </button>
          <span className="px-2 font-medium text-sm text-gray-900">
            {item?.quantity}
          </span>
          <button
            onClick={() => handleIncrease(item.productId)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <FiPlus size={14} />
          </button>
        </div>

        {/* Price */}
        <div className="font-bold text-gray-900 text-lg w-24 text-right">
          £{(item?.product?.price * item?.quantity).toFixed(2)}
        </div>

        {/* Remove Button */}
        <button
          onClick={() => handleRemove(item.productId)}
          className="text-brand-gold hover:text-red-600 transition-colors ml-4"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  )
}
