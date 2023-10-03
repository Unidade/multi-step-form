import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { InputWithPrefix } from "./InputWithPrefix"
import { twMerge } from "tailwind-merge"

export type UserInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function UserInput(props: UserInputProps) {
  return (
    <InputWithPrefix
      prefix="user"
      {...props}
      className={twMerge(
        "w-full pl-4 rounded-sm peer lg:rounded-md focus:outline-purplish-blue placeholder:text-cool-gray border border-cool-gray py-2",
        props.className
      )}
    />
  )
}
