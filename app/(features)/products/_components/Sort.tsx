import { SortDropDown } from "./SortDropDown"

export default function Sort() {
  return (
    <span className="font-body font-semibold flex items-center justify-end gap-2">
      Sort by: <span className="font-normal">Date, old to new</span>
      <SortDropDown />
    </span>
  )
}
