"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function confirm() {
  const cookieStore = cookies()

  cookieStore.set("furthestVisitedStep", "confirmed")

  redirect("/confirmed")
}


