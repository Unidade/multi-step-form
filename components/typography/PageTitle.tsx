import { twMerge } from "tailwind-merge"

interface PageTitleProps {
  children: string
  className?: string
}

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={twMerge(
        "text-2xl capitalize text-marine-blue font-bold tracking-tight rounded-lg",
        className
      )}
    >
      {children}
    </h1>
  )
}
