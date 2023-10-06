import { twMerge } from "tailwind-merge"
import { NavItem } from "./NavItem"
import { STEPS } from "@/lib/initialData"

export function Navigation() {
  const stepsWithoutLast = STEPS.slice(0, -1)

  return (
    <nav
      className={twMerge(
        "min-h-[172px] flex items-center bg-mobile-sidebar bg-no-repeat bg-center bg-cover",
        "md:bg-desktop-sidebar  md:h-full md:items-start md:p-8 md:rounded-lg"
      )}
    >
      <ul className="flex w-full md:flex-col justify-center md:justify-start gap-10">
        {stepsWithoutLast.map((step) => {
          return <NavItem key={step} href={step} title={step.replaceAll("-", " ")} />
        })}
      </ul>
    </nav>
  )
}
