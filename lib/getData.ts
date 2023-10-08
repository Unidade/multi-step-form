import { Data } from "./initialData"
import { getCookie } from "./getCookite"

export function getData(): Data {
  try {
    const data = getCookie("data")?.value
    console.log(data)
    if (!data) throw new Error("No data found")

    const dataJson = JSON.parse(data)
    return dataJson
  } catch (e) {
    console.error(e)
    throw e
  }
}
