import { PageTitle } from "@/components/typography/PageTitle"
import { AddOnForm } from "../../components/forms/AddOnForm"

export default function Home() {
  return (
    <div>
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Pick add-ons
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-4">
        <AddOnForm />
      </div>
    </div>
  )
}
