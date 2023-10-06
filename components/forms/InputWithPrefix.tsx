import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type InputWithPrefixProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  prefix: string
}

export function Input({ prefix, ...rest }: InputWithPrefixProps) {
  return (
    <input
      {...rest}
      name={`${prefix}-${rest.name}`}
      className={twMerge(
        "w-full pl-4 rounded-sm peer lg:rounded-md focus:outline-purplish-blue placeholder:text-cool-gray border border-cool-gray py-2",
        rest.className
      )}
    />
  )
}
