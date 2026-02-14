"use client"
import { useQueryStates, parseAsInteger } from "nuqs"
import { Slider } from "@/components/ui/slider"

export function PriceRange() {
  // 1. ربط السعر بالـ URL (min و max)
  const [prices, setPrices] = useQueryStates(
    {
      min: parseAsInteger.withDefault(0),
      max: parseAsInteger.withDefault(7000), // غير الرقم ده حسب أغلى منتج عندك
    },
    { shallow: false }, // عشان يبعت خبر للسيرفر أول ما السعر يتغير
  )

  // 2. دالة التحديث لما المستخدم يحرك السلايدر
  const handleValueChange = (values: number[]) => {
    setPrices({
      min: values[0],
      max: values[1],
    })
  }

  return (
    <div className="space-y-6 rounded-lg bg-card w-full max-w-sm">
      <div className="flex justify-center items-center">
        <span className="text-xs text-muted-foreground text-center">
          {prices.min} - {prices.max}
        </span>
      </div>

      <Slider
        // السلايدر بياخد مصفوفة فيها قيمتين [البداية, النهاية]
        value={[prices.min, prices.max]}
        max={7000}
        step={10}
        onValueChange={handleValueChange}
        className="cursor-pointer"
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0</span>
        <span>7000+</span>
      </div>
    </div>
  )
}
