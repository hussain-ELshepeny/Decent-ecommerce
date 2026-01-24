// import ProductCard from "../../products/_components/ProductCard"

export default function Recommendation() {
  const RECOMMENDATIONS = [{ id: 1, name: "hussain" }]
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* {RECOMMENDATIONS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  )
}
