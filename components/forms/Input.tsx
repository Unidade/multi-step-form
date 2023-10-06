import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Input } from "./InputWithPrefix"

const userPrefix = "user"

export type InputWithNamePrefix<T extends string> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: `${T}-${string}`
}

export type UserInputProps = InputWithNamePrefix<typeof userPrefix>

export function UserInput(props: UserInputProps) {
  return <Input prefix="user" {...props} />
}
