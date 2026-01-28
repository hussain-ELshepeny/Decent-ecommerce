import { IoMdClose } from "react-icons/io"
import { SidebarSearchInput } from "./SidebarSearchInput"

export default function SidebarHeader({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* <h2 className="text-xl font-bold text-gray-800">My App</h2> */}
      <SidebarSearchInput />
    </div>
  )
}
