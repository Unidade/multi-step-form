"use client"

import { Addon, Plan } from "@/lib/initialData"
import { FormButtons } from "./FormButtons"

import { submit } from "@/lib/submit"

import { useForm } from "@mantine/form"

import { Form } from "./Form"

interface AddOnFormProps {
  plan: Plan
}

export function AddOnForm({ plan }: AddOnFormProps) {
  const form = useForm({
    initialValues: {
      addons: plan.addons,
    },
  })

  const fields = form.values.addons.map((addon, index) => {
    const recurrence = plan.recurrence === "yearly" ? "yr" : "mo"
    const price = plan.recurrence === "yearly" ? addon.price * 10 : addon.price

    return (
      <div
        className="flex gap-4 p-4 outline outline-1 rounded-md items-center"
        key={addon.id}
      >
        <input
          type="checkbox"
          className="w-5 h-5 accent-purplish-blue"
          {...form.getInputProps(`addons.${index}.active`, { type: "checkbox" })}
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-marine-blue leading-7">{addon.title}</h3>
          <p className="text-cool-gray text-sm">{addon.subtitle}</p>
        </div>
        <p className="text-purplish-blue">
          +${price}/{recurrence}
        </p>
      </div>
    )
  })

  return (
    <Form
      onSubmit={form.onSubmit((values) => {
        const activeAddons = values.addons.filter((addon: Addon) => addon.active)

        const planCopy = { ...plan }
        planCopy.addons = activeAddons

        submit({ plan: { ...planCopy } })
      })}
    >
      <div className="flex flex-col gap-4">
        {fields.length > 0 ? (
          fields
        ) : (
          <p className="text-bold text-strawberry-red text-lg self-center mt-10">
            This plan doesn&apos;t have addons
          </p>
        )}
      </div>
      <FormButtons />
    </Form>
  )
}
