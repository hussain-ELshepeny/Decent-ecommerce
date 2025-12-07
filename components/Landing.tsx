import Image from "next/image"
import React from "react"
import { TiArrowLeft, TiArrowRight } from "react-icons/ti"

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brandDark text-white overflow-hidden pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              REDEFINE YOUR STYLE <br />
              WITH <span className="text-yellow-500">DECENT.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover the latest trends in men's fashion. Premium quality,
              sustainable materials, and a fit that speaks for itself.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <button className="bg-white text-slate-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
              <button className="border border-gray-600 px-8 py-3 font-semibold hover:border-brandGoldHover transition-colors">
                EXPLORE
              </button>
            </div>

            {/* Carousel Controls (Visual only for this demo) */}
            {/* <div className="mt-12 flex space-x-4 justify-center lg:justify-start">
              <button className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all">
                <TiArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all">
                <TiArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </div>

          {/* Image Showcase */}
          <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] flex items-center justify-center space-x-4 overflow-hidden mask-fade-sides">
            {/* Main Hero Image */}
            <div className="relative w-64 md:w-80 h-full rounded-lg overflow-hidden shadow-2xl transform scale-100 z-10 transition-transform duration-500 hover:scale-105">
              <Image
                width={500}
                height={500}
                src="/download.jpeg"
                alt="Man in coat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Side Image (Partial) */}
            <div className="hidden md:block absolute right-0 translate-x-1/2 w-64 h-[85%] rounded-lg overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="/man-in-coat.webp"
                alt="Man in suit"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Side Image (Partial Left) */}
            <div className="hidden md:block absolute left-0 -translate-x-1/2 w-64 h-[85%] rounded-lg overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src=" /man-in-shirt(1).jpeg "
                alt="Man in casual wear"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
