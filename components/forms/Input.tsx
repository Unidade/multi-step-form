import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Input } from "./InputWithPrefix"

const userPrefix = "user"
const planPrefix = "plan"
const addonPrefix = "addon"

export type InputWithNamePrefix<T extends string> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: `${T}-${string}`
}

export type UserInputProps = InputWithNamePrefix<typeof userPrefix>
export type PlanInputProps = InputWithNamePrefix<typeof planPrefix>
export type AddOnInputProps = InputWithNamePrefix<typeof addonPrefix>

export function UserInput(props: UserInputProps) {
  return <Input {...props} />
}
export function PlanInput(props: PlanInputProps) {
  return <Input {...props} />
}
export function AddOnInput(props: AddOnInputProps) {
  return <Input {...props} />
}
