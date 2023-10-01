import { Data } from "@/lib/initialData"
import { cookies } from "next/headers"
import Link from "next/link"
import { FormButtons } from "../FormButtons"
import { confirm } from "@/lib/confirm"
import { PageTitle } from "@/components/typography/PageTitle"

export default function Home() {
  const data = getData()

  console.log(data)

  let recurrence: "mo" | "yr"
  let planPrice = Number(data.plan.price)

  if (data.plan.recurrence === "yearly") {
    recurrence = "yr"
    planPrice *= 10
  } else {
    recurrence = "mo"
  }

  const totalPrice = data.plan.addons.reduce((acc, addon) => {
    const addonPrice =
      recurrence === "mo" ? Number(addon.price) : Number(addon.price) * 10
    return acc + addonPrice
  }, planPrice)

  console.log(totalPrice)

  return (
    <div className="w-full">
      <PageTitle className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Finishing up
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Double-check everything looks OK before confirming{" "}
      </p>
      <div className="mt-4">
        <div>
          <div className="bg-alabaster p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="capitalize leading-3 text-marine-blue font-bold">
                  {data.plan.name} ({data.plan.recurrence})
                </h2>
                <Link
                  className="underline hover:text-marine-blue text-cool-gray"
                  href={"/select-plan"}
                >
                  Change
                </Link>
              </div>
              <div className="text-marine-blue font-bold">
                ${planPrice}/{recurrence}
              </div>
            </div>
            <div className="w-full h-[1px] bg-light-gray mt-3" />

            <ul className="flex flex-col gap-2 text-sm mt-3">
              {data.plan.addons.map((addon) => {
                const addonPrice =
                  recurrence === "mo" ? Number(addon.price) : Number(addon.price) * 10

                return (
                  <li key={addon.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="capitalize leading-3 text-cool-gray font-bold">
                        {addon.title}
                      </h3>
                    </div>
                    <div className="text-marine-blue ">
                      +${addonPrice}/{recurrence}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex mt-4 justify-between px-4 items-center">
            <p className="text-cool-gray">Total</p>
            <p className="text-purplish-blue font-bold">
              ${totalPrice}/{recurrence}
            </p>
          </div>
        </div>
      </div>
      <form action={confirm}>
        <FormButtons />
      </form>
    </div>
  )
}

function getData(): Data {
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
