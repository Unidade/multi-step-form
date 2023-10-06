import { PageTitle } from "@/components/PageTitle"
import { AddOnForm } from "../../components/forms/AddOnForm"
import { getData } from "@/lib/getData"

export default function Home() {
  const data = getData()

  return (
    <div>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Pick add-ons
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-4">
        <AddOnForm savedAddonsValues={data.plan.addons} />
      </div>
    </div>
  )
}
