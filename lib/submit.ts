"use server"

import { cookies, headers } from "next/headers"

import { Data, STEP, STEPS, initialData, schema } from "./initialData"
import { redirect } from "next/navigation"

export async function submit(formData: FormData) {
  const cookieStore = cookies()
  const head = headers()
  console.log(head)

  const currentData = cookieStore.get("data")?.value
  const lastStep = cookieStore.get("lastStep")?.value

  const currentStep = head.get("next-url")?.replace("/", "")
  console.log(currentStep)

  const currentStepIndex = STEPS.indexOf(currentStep as STEP)
  const lastStepIndex = STEPS.indexOf(lastStep as STEP)

  const nextStep =
    currentStepIndex === STEPS.length - 1 ? "" : STEPS[currentStepIndex + 1]

  console.log(nextStep)
  const addonsChecked = []

  try {
    const parsedData = currentData ? JSON.parse(currentData) : initialData
    const copiedData = { ...parsedData } as Data

    console.log(parsedData)
    const entries = formData.entries() as IterableIterator<[string, string]>
    console.log(entries)

    for (const [field, value] of entries) {
      // user and plan are the only root keys in Data
      const parts = field.split("-")
      if (parts.length === 2) {
        const [prefix, key] = parts as [keyof Data, keyof Data["user" | "plan"]]
        if (copiedData[prefix]?.hasOwnProperty(key)) {
          copiedData[prefix][key] = value
        }
      } else if (field.startsWith("addon-")) {
        addonsChecked.push(field.replace(/^addon-/, ""))
      }
    }
    // check if addon is checked else uncheck
    for (const addon of copiedData.plan.addons) {
      addon.checked = addonsChecked.includes(addon.id)
    }

    const validatedData = schema.parse(copiedData)
    console.log(validatedData)

    const stringifiedData = JSON.stringify(validatedData)
    cookieStore.set("data", stringifiedData)

    if (currentStep && currentStepIndex > lastStepIndex) {
      cookieStore.set("lastStep", currentStep)
    }
  } catch (error) {
    console.log(error)
    throw error
  }

  if (nextStep) {
    redirect(`/${nextStep}`)
  }
}
