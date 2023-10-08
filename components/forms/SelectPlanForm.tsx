"use client"

import { Plan, PlanName, PlanRecurrence, planSchema, plansData } from "@/lib/initialData"

import { FormButtons } from "./FormButtons"
import { Form } from "./Form"
import { useState } from "react"

import { submit } from "@/lib/submit"
import { SwitchRecurrence } from "./SwitchRecurrence"
import { RadioCard } from "./RadioCard"

interface SelectPlanForm {
  initialSelectedPlan: Plan
}

export function SelectPlanForm({ initialSelectedPlan }: SelectPlanForm) {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>(initialSelectedPlan.name)
  const [monthlyOrYearly, setMonthlyOrYearly] = useState<PlanRecurrence>(
    initialSelectedPlan.recurrence
  )

  const handleSubmit = (id: string) => {
    const plan = getPlan(id)
    if (plan) {
      const _plan = Object.assign({ plan }, plan, { recurrence: monthlyOrYearly })
      submit(_plan)
    }
  }

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(selectedPlan)
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
        {plansData.map((plan) => {
          plan.recurrence = monthlyOrYearly

          return (
            <RadioCard
              selectedPlan={selectedPlan}
              setSelectPlan={setSelectedPlan}
              key={plan.id}
              data={plan}
            />
          )
        })}
      </div>
      <SwitchRecurrence
        monthlyOrYearly={monthlyOrYearly}
        setMonthlyOrYearly={setMonthlyOrYearly}
      />
      <FormButtons />
    </Form>
  )
}

function getPlan(id: string) {
  return plansData.find((plan) => plan.id === id)
}
