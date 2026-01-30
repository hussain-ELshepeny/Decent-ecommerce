import Landing from "@/components/Landing"
import NewArrivals from "./(features)/products/_components/NewArrivals"
import BestSellers from "./(features)/products/_components/BestSellers"
import Categories from "./(features)/products/_components/Categories"
export default async function Home({ searchParams }: any) {
  return (
    <div>
      <Landing />
      <NewArrivals />
      {/* <BestSellers /> */}
      <Categories />
      {/* <Products searchParams={searchParams} /> */}
    </div>
  )
}
