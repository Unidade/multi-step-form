type FormProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

export function Form({ children, ...rest }: FormProps) {
  return (
    <form className="mt-4 flex-1 flex flex-col" {...rest}>
      {children}
    </form>
  )
}
