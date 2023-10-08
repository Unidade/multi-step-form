"use client"

import { usersSchema } from "@/lib/initialData"
import { useForm, zodResolver } from "@mantine/form"
import { UserInput } from "./UserInput"
import { FormButtons } from "./FormButtons"
import { Form } from "./Form"
import { Label } from "./Label"

import clsx from "clsx"
import { z } from "zod"
import { ErrorMessage } from "./ErrorMessage"
import { submit } from "@/lib/submit"

interface YourInfoFormProps {
  initialValues: z.infer<typeof usersSchema>["user"]
}

export function YourInfoForm({ initialValues }: YourInfoFormProps) {
  const form = useForm({
    initialValues: {
      user: initialValues,
    },
    validate: zodResolver(usersSchema),
  })

  console.log(form.errors)
  console.log(form.values)

  return (
    <Form
      onSubmit={form.onSubmit((values) => {
        if (form.isValid()) {
          submit(values)
        }
      })}
    >
      <Label htmlFor="user-name">
        Name
        <ErrorMessage message={form.errors["user.name"]} />
      </Label>
      <UserInput
        className={clsx(form.errors["user.name"] && "border-strawberry-red")}
        name="user-name"
        placeholder="e.g Stephen King"
        {...form.getInputProps("user.name")}
      />
      <Label htmlFor="user-email">
        Email
        <ErrorMessage message={form.errors["user.email"]} />
      </Label>
      <UserInput
        className={clsx(form.errors["user.email"] && "border-strawberry-red")}
        name="user-email"
        placeholder="e.g stephen@king.com"
        {...form.getInputProps("user.email")}
      />
      <Label htmlFor="user-phone">
        Phone
        <ErrorMessage message={form.errors["user.phone"]} />
      </Label>
      <UserInput
        className={clsx(form.errors["user.phone"] && "border-strawberry-red")}
        name="user-phone"
        placeholder="e.g 91121221"
        {...form.getInputProps("user.phone")}
      />
      <FormButtons />
    </Form>
  )
}
