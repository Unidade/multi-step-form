import { Data, initialData } from "./initialData"
import { getCookie } from "./getCookite"

export function getData(): Data {
  try {
    const data = getCookie("data")?.value || JSON.stringify(initialData)

    const dataJson = JSON.parse(data)
    return dataJson
  } catch (e) {
    console.error(e)
    throw e
  }
}
