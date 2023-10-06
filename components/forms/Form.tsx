"use client"

import { Data, usersSchema } from "@/lib/initialData"
import { submit } from "@/lib/submit"
import { useForm, zodResolver } from "@mantine/form"
import { UserInput } from "./Input"
import { FormButtons } from "./FormButtons"

interface YourInfoFormProps {
  initialValues: Data["user"]
}

export function YourInfoForm({ initialValues }: YourInfoFormProps) {
  const form = useForm<Data["user"]>({
    initialValues,
    validate: zodResolver(usersSchema),
  })

  return (
    <Form action={submit}>
      <UserInput
        name="name"
        placeholder="e.g Stephen King"
        {...form.getInputProps("name")}
      />
      <UserInput
        name="email"
        placeholder="e.g stephen@king.com"
        {...form.getInputProps("email")}
      />
      <UserInput
        name="phone"
        placeholder="e.g 91121221"
        {...form.getInputProps("phone")}
      />
      <FormButtons />
    </Form>
  )
}

type FormProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

function Form({ children, ...rest }: FormProps) {
  return (
    <form className="flex flex-col gap-4 mt-4" {...rest}>
      {children}
    </form>
  )
}
