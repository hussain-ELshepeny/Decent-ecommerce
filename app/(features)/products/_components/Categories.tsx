import SectionHeader from "@/components/SectionHeading"
import CategoryBox from "./CategoryBox"
export default function Categories() {
  return (
    <section className="section-container">
      <SectionHeader title="Featured Collections" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryBox title={"Formal Wear"} imageSrc="/manikan.jpeg" />
        <CategoryBox title={"Trousers"} imageSrc="/pants.jpeg" />
        <CategoryBox title={"Footwear"} imageSrc="/shoes.jpeg" />
        <CategoryBox
          title={"Pullovers & Hoodies"}
          imageSrc="https://i.pinimg.com/1200x/d4/ef/d2/d4efd2b727ae529ee087fd97be703ed9.jpg"
        />
      </div>
    </section>
  )
}
