import { AddOnForm } from "./AddOnForm"

export default function Home() {
  return (
    <div>
      <h1 className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Pick add-ons
      </h1>
      <p className="text-cool-gray text-sm mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-4">
        <AddOnForm />
      </div>
    </div>
  )
}
