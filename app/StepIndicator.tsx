"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const STEPS = ["your-info", "select-plan", "add-ons", "summary"] as const

export function StepIndicator() {
  const pathname = usePathname()

  return (
    <ul className="inline-flex gap-4 mx-auto ">
      {STEPS.map((path, idx) => {
        const isActive = pathname === `/${STEPS[idx]}`
        console.log(pathname, path, isActive)

        return (
          <li
            className={clsx(
              "border rounded-full text-white w-8 h-8 flex items-center justify-center",
              {
                "bg-light-blue text-marine-blue border-cool-gray": isActive,
              }
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
