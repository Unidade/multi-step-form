"use server"
import { cookies, headers } from "next/headers"
import { STEPS } from "./initialData"
import { redirect } from "next/navigation"

export async function confirm() {
  const cookieStore = cookies()
  const head = headers()

  const pathname = head.get("next-url")?.replace("/", "") as (typeof STEPS)[number]

  cookieStore.set("confirmed", "true")
  cookieStore.set("furthestVisitedStep", pathname)

  return redirect("/confirmed")
}
