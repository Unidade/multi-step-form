import { SelectPlanForm } from "@/components/forms/SelectPlanForm"

export default function Home() {
  return (
    <div>
      <h1 className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Select your plan
      </h1>
      <p className="text-cool-gray text-sm mt-2">
        You have the option of monthly or yearly billing
      </p>

      <SelectPlanForm />
    </div>
  )
}
