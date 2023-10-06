import { SelectPlanForm } from "@/components/forms/SelectPlanForm"
import { PageTitle } from "@/components/PageTitle"
import { getData } from "@/lib/getData"

export default function Home() {
  const data = getData()

  return (
    <div>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Select your plan
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        You have the option of monthly or yearly billing
      </p>

      <SelectPlanForm savedValues={data.plan} />
    </div>
  )
}
