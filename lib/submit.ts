"use server"

import { cookies, headers } from "next/headers"

import { Data, STEP, STEPS, initialData, formSchema } from "./initialData"
import { redirect } from "next/navigation"

export async function submit(updatedData: Partial<Data>) {
  const cookieStore = cookies()
  const head = headers()

  const currentData = cookieStore.get("data")?.value
  const furthestVisitedStep = cookieStore.get("furthestVisitedStep")?.value

  const currentStep = head.get("next-url")?.replace("/", "")

  const currentStepIndex = STEPS.indexOf(currentStep as STEP)
  const furthestVisitedStepIndex = STEPS.indexOf(furthestVisitedStep as STEP)

  const nextStepIndex = currentStepIndex + 1
  const nextStep =
    currentStepIndex === STEPS.length - 1 ? "" : STEPS[currentStepIndex + 1]

  try {
    const parsedData = currentData ? JSON.parse(currentData) : initialData
    const copiedData = { ...parsedData, ...updatedData }

    console.log(copiedData)
    const validatedData = formSchema.parse(copiedData)

    const stringifiedData = JSON.stringify(validatedData)
    cookieStore.set("data", stringifiedData)

    if (nextStep && nextStepIndex > furthestVisitedStepIndex) {
      cookieStore.set("furthestVisitedStep", nextStep)
    }
  } catch (error) {
    throw error
  }

  if (nextStep) {
    redirect(`/${nextStep}`)
  }
}
