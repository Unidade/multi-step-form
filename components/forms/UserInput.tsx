import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { InputWithPrefix } from "./InputWithPrefix"

const userPrefix = "user"

export type InputWithNamePrefix<T extends string> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: `${T}-${string}`
}

export type UserInputProps = InputWithNamePrefix<typeof userPrefix>

export function UserInput(props: UserInputProps) {
  return <InputWithPrefix {...props} />
}
