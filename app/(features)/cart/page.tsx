// cart Page
import CartCount from "./_components/CartCount"
import CartItemList from "./_components/CartItemList"
import Heading from "./_components/Heading"
import OrderSummary from "./_components/OrderSummary"
import Recommendation from "./_components/Recommendation"
import SecurityNotes from "./_components/SecurityNotes"
export default async function page() {
  return (
    <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Heading />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-12">
          <CartCount />
          <CartItemList />
          <Recommendation />
        </div>
        <div className="lg:col-span-4">
          {/* <OrderSummary /> */}
          <SecurityNotes />
        </div>
      </div>
    </main>
  )
}
