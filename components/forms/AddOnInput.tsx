import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Input } from "./InputWithPrefix"

type AddOnInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function AddOnInput(props: AddOnInputProps) {
  return <Input {...props} prefix="addon" />
}
