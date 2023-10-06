import { cookies } from "next/headers"
import { Data } from "./initialData"

export function getData(): Data {
  const cookieStore = cookies()

  try {
    const data = cookieStore.get("data")?.value
    if (!data) throw new Error("No data found")

    const dataJson = JSON.parse(data)
    return dataJson
  } catch (e) {
    console.error(e)
    throw e
  }
}
