import { twMerge } from "tailwind-merge"
import { NavItem } from "./NavItem"
import { STEP, STEPS } from "@/lib/initialData"
import { cookies } from "next/headers"

export function Navigation() {
  const stepsWithoutConfirmed = STEPS.slice(0, -1)

  const cookieStore = cookies()
  const furthestVisitedStep = cookieStore.get("furthestVisitedStep")?.value ?? STEPS[0]

  const furthestVisitedStepIndex = STEPS.indexOf(furthestVisitedStep as STEP)

  return (
    <nav
      className={twMerge(
        "min-h-[172px] flex items-center bg-mobile-sidebar bg-no-repeat bg-center bg-cover",
        "md:bg-desktop-sidebar  md:h-full md:items-start md:p-8 md:rounded-lg"
      )}
    >
      <ul className="flex w-full md:flex-col justify-center md:justify-start gap-10">
        {stepsWithoutConfirmed.map((step, idx) => {
          return (
            <NavItem
              key={step}
              stepIndex={idx}
              href={step}
              title={step.replaceAll("-", " ")}
              furthestVisitedStepIndex={furthestVisitedStepIndex}
            />
          )
        })}
      </ul>
    </nav>
  )
}
