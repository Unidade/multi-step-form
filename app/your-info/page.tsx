import { PageTitle } from "@/components/PageTitle"

import { YourInfoForm } from "@/components/forms/YourInfoForm"
import { getData } from "@/lib/getData"

export default function Home() {
  const data = getData()

  return (
    <div className="flex-1">
      <PageTitle className="capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        personal info
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Please fill in the information below and your goal for digital saving.
      </p>

      <YourInfoForm savedValues={data.user} />
    </div>
  )
}
