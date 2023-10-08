import { PageTitle } from "@/components/PageTitle"
import { AddOnForm } from "../../components/forms/AddOnForm"
import { getData } from "@/lib/getData"
import { Plan, plansData } from "@/lib/initialData"

export default function Home() {
  const data = getData()
  data.plan.addons = getPlanAddons(data.plan)

  return (
    <>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Pick add-ons
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <AddOnForm plan={data.plan} />
    </>
  )
}

function getPlanAddons(plan: Plan) {
  return plansData.find((p) => p.id === plan.id)?.addons ?? []
}
