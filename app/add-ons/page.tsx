import { PageTitle } from "@/components/PageTitle"
import { AddOnForm } from "../../components/forms/AddOnForm"
import { getData } from "@/lib/getData"
import { Plan, plansData } from "@/lib/initialData"

export default function Home() {
  const { plan } = getData()

  const existingAddonIds = new Set(plan.addons.map((addon) => addon.id))

  // Filter default addons that are not in the plan
  const missingDefaultAddons = getDefaultPlanAddons(plan).filter(
    (defaultAddon) => !existingAddonIds.has(defaultAddon.id)
  )

  const updatedPlan = {
    ...plan,
    addons: [...plan.addons, ...missingDefaultAddons],
  }

  return (
    <>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Pick add-ons
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <AddOnForm plan={updatedPlan} />
    </>
  )
}

function getDefaultPlanAddons(plan: Plan) {
  return plansData.find((p) => p.id === plan.id)?.addons ?? []
}
