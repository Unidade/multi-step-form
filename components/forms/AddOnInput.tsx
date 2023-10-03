import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { InputWithPrefix } from "./InputWithPrefix"

type AddOnInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function AddOnInput(props: AddOnInputProps) {
  return <InputWithPrefix {...props} prefix="addon" />
}
