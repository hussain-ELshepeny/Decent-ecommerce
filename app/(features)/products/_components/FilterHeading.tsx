import { ReactNode } from "react"

export default function FilterHeading({ children }: { children: ReactNode }) {
  return <h4 className="text-base font-bold text-charcoal dark:text-white mb-4">{children}</h4>
}
