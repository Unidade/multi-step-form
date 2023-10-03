import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputWithPrefixProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  prefix: string
}

export function InputWithPrefix({ prefix, ...rest }: InputWithPrefixProps) {
  return <input {...rest} name={`${prefix}-${rest.name}`} />
}
