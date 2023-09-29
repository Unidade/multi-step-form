"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

export const validSteps = ["your-info", "select-plan", "add-ons", "summary"] as const
export type validStepType = (typeof validSteps)[number]

export function StepIndicator() {
  const pathname = usePathname()

  return (
    <ul className="inline-flex gap-4 mx-auto ">
      {validSteps.map((path, idx) => {
        const isActive = pathname === `/${validSteps[idx]}`

        return (
          <li
            className={twMerge(
              "border rounded-full text-white w-8 h-8 flex items-center justify-center",
              isActive && "bg-light-blue text-marine-blue border-cool-gray"
            )}
            key={idx}
          >
            <Link href={`/${path}`}>{idx + 1}</Link>
          </li>
        )
      })}
    </ul>
  )
}
