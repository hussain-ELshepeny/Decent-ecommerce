"use client"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from "./ProductCard"
import { Product } from "@/app/generated/prisma"
import SliderProductCard from "./SliderProductCard"

export default function ProductsSlider({ products }: { products: Product[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiper.wrapperEl.style.height = "490px"
        }}
        modules={[Navigation]}
        spaceBetween={0}
        // slidesPerView={5}
        loop={true}
        navigation={{
          nextEl: ".products-next",
          prevEl: ".products-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        // className="products-swiper"
        // className="[&_.swiper-wrapper]:h-[490px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <SliderProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons */}
      <button className="products-prev cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button className="products-next cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
