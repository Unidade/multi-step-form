import { submit } from "@/lib/submit"
import { FormButtons } from "../../components/forms/FormButtons"
import { PageTitle } from "@/components/typography/PageTitle"
import { UserInput } from "../../components/forms/UserInput"
import { YourInfoForm } from "./YourInfoForm"

export default function Home() {
  return (
    <div className="flex-1">
      <PageTitle className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        personal info
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Please fill in the information below and your goal for digital saving.
      </p>

      <YourInfoForm />
    </div>
  )
}
