"use client"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci"

export function SidebarSearchInput() {
  return (
    <Field className="text-black outline-none">
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">
          <CiSearch />
        </Button>
      </ButtonGroup>
    </Field>
  )
}
