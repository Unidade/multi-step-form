"use server"

import { cookies } from "next/headers"
import { STEPS } from "@/types"
import { initialData, schema } from "./initialData"
import { redirect } from "next/navigation"

export async function submit(formData: FormData) {
  const cookieStore = cookies()

  const currentData = cookieStore.get("data")?.value
  const lastStep = cookieStore.get("lastStep")?.value

  try {
    const parsedData = currentData ? JSON.parse(currentData) : initialData
    const copiedData = { ...parsedData }

    const formDataObject = Object.fromEntries(formData.entries())

    console.log(parsedData)
    console.log(formDataObject)

    for (const field in formDataObject) {
      let temp
      if (field.startsWith("user-")) {
        temp = field.split("-")
        console.log(temp)
        console.log(copiedData.user[temp[1]])
        copiedData.user[temp[1]] = formDataObject[field]
      } else if (field.startsWith("plan-")) {
        temp = field.split("-")
        copiedData.plan[temp[1]] = formDataObject[field]
      } else if (field.startsWith("addon-")) {
        temp = field.split("-")
        copiedData.plan.addons[temp[1]].checked = formDataObject[field] === "on"
      }
    }

    const formattedData = schema.parse(copiedData)
    console.log(formattedData)

    const stringifiedData = JSON.stringify(formattedData)

    const nextStep = STEPS[STEPS.indexOf(lastStep as any) + 1]

    cookieStore.set("data", stringifiedData)
    cookieStore.set("lastStep", nextStep)
    redirect(`/${nextStep}`)
  } catch (error) {
    console.log(error)
    return
  }
}
