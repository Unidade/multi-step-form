import Link from "next/link"
import { FormButtons } from "../../components/forms/FormButtons"
import { confirm } from "@/lib/confirm"
import { PageTitle } from "@/components/PageTitle"
import { getData } from "@/lib/getData"

export default function SummaryPage() {
  const data = getData()

  const recurrence = data.plan.recurrence === "monthly" ? "mo" : "yr"

  const totalPrice = data.plan.addons.reduce((acc, addon) => {
    const addonPrice = recurrence === "mo" ? addon.price : addon.price * 10
    return acc + addonPrice
  }, data.plan.price)

  const addOns = data.plan.addons.map((addon) => {
    const addonPrice = recurrence === "mo" ? addon.price : addon.price * 10

    return (
      <li key={addon.id} className="flex items-center justify-between">
        <div>
          <h3 className="capitalize leading-3 text-cool-gray font-bold">{addon.title}</h3>
        </div>
        <div className="text-marine-blue ">
          +${addonPrice}/{recurrence}
        </div>
      </li>
    )
  })

  return (
    <>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
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
                ${data.plan.price}/{recurrence}
              </div>
            </div>
            <div className="w-full h-[1px] bg-light-gray mt-3" />

            <ul className="flex flex-col gap-2 text-sm mt-3">
              {addOns.length > 0 ? (
                addOns
              ) : (
                <p className="text-cool-gray">No add-ons selected</p>
              )}
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
      <form className="flex-1 flex items-end pb-4" action={confirm}>
        <FormButtons />
      </form>
    </>
  )
}
