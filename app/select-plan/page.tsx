import { SelectPlanForm } from "@/components/forms/SelectPlanForm"
import { PageTitle } from "@/components/typography/PageTitle"

export default function Home() {
  return (
    <div>
      <PageTitle className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Select your plan
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        You have the option of monthly or yearly billing
      </p>

      <SelectPlanForm />
    </div>
  )
}
