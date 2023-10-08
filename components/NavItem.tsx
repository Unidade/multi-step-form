"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItemProps {
  href: string
  title: string
  stepIndex: number
  furthestVisitedStepIndex: number
}

export function NavItem({
  href,
  title,
  stepIndex,
  furthestVisitedStepIndex,
}: NavItemProps) {
  const pathname = usePathname().replace("/", "")
  const _href = href.replace("/", "")

  const stepNumber = stepIndex + 1

  const isActive = pathname === _href || (stepNumber === 4 && pathname === "confirmed")

  const isDisabled = stepIndex > furthestVisitedStepIndex

  console.log({
    stepNumber,
    pathname,
    isActive,
  })

  return (
    <li>
      <Link
        aria-disabled={isDisabled}
        className={clsx(
          "flex items-center gap-4 text-white uppercase",
          isDisabled && "opacity-80"
        )}
        href={href}
      >
        <div
          className={clsx(
            "h-10 w-10 flex items-center justify-center border-light-gray border rounded-full font-bold",
            isActive && "bg-light-blue text-marine-blue",
            isDisabled && "bg-cool-gray text-white"
          )}
        >
          {stepNumber}
        </div>
        <div className="hidden md:block">
          <p className="text-light-gray leading-4">step {stepNumber}</p>
          <p className="font-bold tracking-widest">{title}</p>
        </div>
      </Link>
    </li>
  )
}
