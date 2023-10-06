"use client"

import { STEPS } from "@/lib/initialData"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

interface NavItemProps {
  href: string
  title: string
}

export function NavItem({ href, title }: NavItemProps) {
  const pathname = usePathname().replace("/", "")
  const _href = href.replace("/", "")

  const isActive = pathname === _href
  const stepNumber = STEPS.findIndex((step) => step === _href) + 1

  console.log({
    stepNumber,
    pathname,
    isActive,
  })

  return (
    <li>
      <Link className={clsx("flex items-center  gap-4 text-white uppercase")} href={href}>
        <div
          className={clsx(
            "h-10 w-10 flex items-center justify-center border-light-gray border rounded-full font-bold",
            isActive && "bg-light-blue text-marine-blue"
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
