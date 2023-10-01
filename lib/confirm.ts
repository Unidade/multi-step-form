"use server"
import { cookies, headers } from "next/headers"
import { STEPS } from "./initialData"
import { redirect } from "next/navigation"

export async function confirm() {
  const cookieStore = cookies()
  const head = headers()

  const pathname = head.get("next-url")?.replace("/", "")

  if (pathname === STEPS[STEPS.length - 1]) {
    cookieStore.set("confirmed", "true")

    return redirect("/confirmed")
  }
}
