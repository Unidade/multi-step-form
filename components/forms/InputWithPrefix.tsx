import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: `${string}-${string}`
}

// Input component with prefix, create a id from name as default
export function InputWithPrefix(props: InputProps) {
  return (
    <input
      id={props.name}
      {...props}
      className={twMerge(
        "w-full pl-4 rounded-sm text-marine-blue peer lg:rounded-md focus:outline-purplish-blue placeholder:text-cool-gray border border-cool-gray py-2",
        props.className
      )}
    />
  )
}
