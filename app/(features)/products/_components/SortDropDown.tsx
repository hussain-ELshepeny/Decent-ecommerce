import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md"

export function SortDropDown() {
  const DROP_MENU_ITEM = "rounded-none hover:cursor-pointer px-0 pb-[13px]"
  const MENU_ITEM_SPAN = 
  "relative text-[16px] text-[#1a1a1ab3] font-medium hover:text-black transition-colors duration-300 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] " +
  "after:w-0 after:h-[1px] after:bg-black " +
  "after:transition-all after:duration-300 hover:after:w-full";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-none shadow-none outline-none hover:cursor-pointer hover:outline-none hover:border-none"
      >
        <Button
          variant="outline"
          className="shadow-none border-none outline-none !p-0 hover:outline-none hover:border-none bg-[#1a1a1a1a] rounded-full w-5 h-5"
        >
          {" "}
          <MdKeyboardArrowDown />{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border-[#c0c0c0] w-50 rounded-md">
        <DropdownMenuGroup className="gap-10 px-2">
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Best Selling</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Alphabetically, A-Z</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Alphabetically, Z-A</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Price, low to high</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Price, high to low</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Date, old to new</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${DROP_MENU_ITEM}`}>
            <span className={`${MENU_ITEM_SPAN}`}>Date, new to old</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
