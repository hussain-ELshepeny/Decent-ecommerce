interface OrderSummaryProps {
  subtotal: number
  tax: number
  delivery: number
  total: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => {
  return (
    <div className="bg-brand-dark text-white p-6 rounded-xl shadow-lg sticky top-24">
      <h2 className="text-xl font-serif mb-6 border-b border-gray-700 pb-4">
        Order Summary
      </h2>

      <div className="space-y-4 text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium text-white">£ 0</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery:</span>
          <span className="font-medium text-white">£ 15</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (20%):</span>
          <span className="font-medium text-white">£ 0</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-600">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-serif">Total:</span>
          <span className="text-2xl font-bold text-brand-gold">
            £{total.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-brand-gold text-brand-dark font-bold py-3.5 px-4 rounded-lg hover:bg-brand-goldHover transition-colors shadow-lg uppercase tracking-wide text-sm">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default OrderSummary
