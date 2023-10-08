import { PageTitle } from "@/components/PageTitle"
import { SelectPlanForm } from "@/components/forms/SelectPlanForm"
import { getData } from "@/lib/getData"

export default function Home() {
  const { plan } = getData()

  return (
    <>
      <PageTitle>Select your plan</PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        You have the option of monthly or yearly billing
      </p>

      <SelectPlanForm initialSelectedPlan={plan} />
    </>
  )
}
