export default function Filters() {
  return (
    <aside className="h-full bg-[#f8f8f8] -mt-9">
      <div className="bg-[#f8f8f8] dark:bg-charcoal/50 p-6 rounded-lg ">
        <h3 className="text-lg font-bold text-charcoal dark:text-white pb-3 border-b border-gray-200 dark:border-gray-700">
          Filters
        </h3>
        {/* Category Filter  */}
        <div className="py-6 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-base font-bold text-charcoal dark:text-white mb-4">
            Category
          </h4>
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
          <h4 className="text-base font-bold text-charcoal dark:text-white mb-4">
            Size
          </h4>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 text-charcoal dark:text-gray-300 text-sm font-medium hover:border-gold">
              S
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-gold bg-gold text-charcoal text-sm font-medium">
              M
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 text-charcoal dark:text-gray-300 text-sm font-medium hover:border-gold">
              L
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 text-charcoal dark:text-gray-300 text-sm font-medium hover:border-gold">
              XL
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 text-charcoal dark:text-gray-300 text-sm font-medium hover:border-gold">
              XXL
            </button>
          </div>
        </div>
        {/* Price Range Slider  */}
        <div className="py-6">
          <h4 className="text-base font-bold text-charcoal dark:text-white mb-4">
            Price Range
          </h4>
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
    </aside>
  )
}
