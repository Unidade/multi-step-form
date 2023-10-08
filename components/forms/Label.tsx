import { twMerge } from "tailwind-merge"

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <label
      className={twMerge("mt-4 flex justify-between text-marine-blue", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
