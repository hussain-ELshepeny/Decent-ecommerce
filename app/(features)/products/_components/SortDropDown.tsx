import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md"

export function SortDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-none shadow-none outline-none hover:cursor-pointer hover:outline-none hover:border-none"
      >
        <Button
          variant="outline"
          className="shadow-none border-none outline-none !p-0 hover:outline-none hover:border-none bg-[#1a1a1a1a] rounded-full w-7 h-7"
        >
          {" "}
          <MdKeyboardArrowDown />{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-[#c0c0c0]">
        <DropdownMenuGroup className="gap-10">
          <DropdownMenuItem className="hover:cursor-pointer">
            Best Selling
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Alphabetically, A-Z
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Alphabetically, Z-A
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Price, low to high
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Price, high to low
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Date, old to new
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">
            Date, new to old
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
