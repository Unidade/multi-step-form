"use client"
import { Plan, PlanName } from "@/lib/initialData"
import clsx from "clsx"
import { getPlanIcon } from "../Icons"

interface RadioCardProps {
  data: Plan
  selectedPlan: PlanName
  setSelectPlan: (plan: PlanName) => void
}

export function RadioCard({ data, selectedPlan, setSelectPlan }: RadioCardProps) {
  const recurrenceFormatted = data.recurrence === "yearly" ? "yr" : "mo"
  const checked = selectedPlan === data.name

  const Icon = getPlanIcon(data.id)

  return (
    <>
      <input
        checked={checked}
        onChange={(event) => setSelectPlan(event.currentTarget.value as PlanName)}
        name="selectedPlan"
        type="radio"
        value={data.id}
        id={data.id}
        hidden
      />
      <label
        className={clsx(
          "flex cursor-pointer md:flex-1 gap-4 text-sm items-center px-4 py-6 hover:outline-marine-blue rounded-md outline outline-2 outline-light-gray transition-all  text-marine-blue",
          checked && "outline-marine-blue bg-alabaster"
        )}
        htmlFor={data.id}
      >
        <div className="flex md:gap-12 md:items-start md:flex-col gap-4 items-center">
          {Icon && <Icon />}
          <div>
            <h2 className="text-lg capitalize font-bold">{data.name}</h2>
            <p className="text-sm text-cool-gray">
              ${data.price}/{recurrenceFormatted}
            </p>
            {data.recurrence === "yearly" && (
              <span className="text-marine-blue font-medium">2 months free</span>
            )}
          </div>
        </div>
      </label>
    </>
  )
}
