"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

export const validSteps = ["your-info", "select-plan", "add-ons", "summary"] as const
export type validStepType = (typeof validSteps)[number]

export function StepIndicator({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <ul className={twMerge("inline-flex gap-4 mx-auto md:flex-col", className)}>
      {validSteps.map((path, idx) => {
        const stepNumber = idx + 1

        const isActive =
          pathname === `/${validSteps[idx]}` ||
          (path === "summary" && pathname === "/confirmed")

        return (
          <li key={idx} className="flex gap-2 items-center">
            <Link
              className={twMerge(
                "border rounded-full font-bold text-white w-8 h-8 flex items-center justify-center",
                isActive && "bg-light-blue text-marine-blue border-cool-gray"
              )}
              href={`/${path}`}
            >
              {stepNumber}
            </Link>
            <div className="hidden md:flex md:flex-col">
              <span className="text-light-gray">STEP: {stepNumber}</span>
              <span className="uppercase md:text-white">{path}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
