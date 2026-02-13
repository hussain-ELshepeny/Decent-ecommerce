import { Button } from "@/components/ui/button"
import FilterHeading from "./FilterHeading"

export default function Filters({
  variant,
  isOpen,
}: {
  variant: "mobile" | "desktop"
  isOpen?: boolean
}) {
  const SIZE_BUTTON =
    "flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 text-charcoal dark:text-gray-300 text-sm font-medium hover:border-gold"
  return (
    <aside
      className={
        variant === "desktop"
          ? `md:block hidden h-full bg-[#f8f8f8]`
          : `bg-white fixed top-0 left-0 h-full z-50 shadow-2xl 
          transition-transform duration-300 ease-in-out transform
          w-[85vw] max-w-[320px] 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
          `
      }
    >
      <div
        className={
          variant === "desktop"
            ? `bg-[#f8f8f8]`
            : `bg-white` +
              "dark:bg-charcoal/50 p-6 rounded-lg h-full flex flex-col justify-between"
        }
      >
        <div>
          <h3 className="text-lg font-bold text-charcoal dark:text-white pb-3 border-b border-gray-200 dark:border-gray-700">
            Filters
          </h3>
          {/* Category Filter  */}
          <div className="py-6 border-b border-gray-200 dark:border-gray-700">
            <FilterHeading>Category</FilterHeading>
            <div className="space-y-3">
              <label className="flex items-center justify-between w-full">
                <span className="text-charcoal dark:text-gray-300 text-sm">
                  Shirts
                </span>
                <input
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gold focus:ring-gold"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between w-full">
                <span className="text-charcoal dark:text-gray-300 text-sm">
                  Pants
                </span>
                <input
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gold focus:ring-gold"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between w-full">
                <span className="text-charcoal dark:text-gray-300 text-sm">
                  Polos
                </span>
                <input
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gold focus:ring-gold"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between w-full">
                <span className="text-charcoal dark:text-gray-300 text-sm">
                  Jackets
                </span>
                <input
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gold focus:ring-gold"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between w-full">
                <span className="text-charcoal dark:text-gray-300 text-sm">
                  Accessories
                </span>
                <input
                  className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gold focus:ring-gold"
                  type="checkbox"
                />
              </label>
            </div>
          </div>
          {/* Size Filter  */}
          <div className="py-6 border-b border-gray-200 dark:border-gray-700">
            <FilterHeading>Size</FilterHeading>
            <div className="flex flex-wrap gap-2">
              <button className={`${SIZE_BUTTON}`}>S</button>
              <button className={`${SIZE_BUTTON}`}>M</button>
              <button className={`${SIZE_BUTTON}`}>L</button>
              <button className={`${SIZE_BUTTON}`}>XL</button>
              <button className={`${SIZE_BUTTON}`}>XXL</button>
            </div>
          </div>
          {/* Price Range Slider  */}
          <div className="py-6">
            <FilterHeading>Price Range</FilterHeading>
            <div className="relative pt-1">
              <input
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-gold [&amp;::-moz-range-thumb]:h-4 [&amp;::-moz-range-thumb]:w-4 [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:bg-gold"
                type="range"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </div>
        </div>
        {/* Apply Filters Button  */}
        <div style={{ justifySelf: "end" }}>
          <Button className="hover:cursor-pointer hover:text-brandGold text-white w-full">
            Apply Filters
          </Button>
        </div>
      </div>
    </aside>
  )
}
