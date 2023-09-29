import clsx from "clsx"
import { FormButtons } from "../FormButtons"

const NUMBER_OF_STEPS = 4

const steps = Array(NUMBER_OF_STEPS).fill(null)

export default function Home() {
  return (
    <div>
      <h1 className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        Select your plan
      </h1>
      <p className="text-cool-gray text-sm mt-2">
        You have the option of monthly or yearly billing
      </p>

      <div className="mt-4">
        <AddonForm />
      </div>
    </div>
  )
}

const addOns = [
  { title: "Online service", price: "1", subtitle: "Access to multiplayer games" },
  {
    title: "Larger storage",
    price: "2",
    subtitle: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable profile",
    price: "2",
    subtitle: "Custom theme on your profile",
  },
]

function AddonForm() {
  return (
    <form className="flex flex-col gap-3">
      {addOns.map((addOn) => {
        const name = addOn.title.toLowerCase()
        return (
          <div
            className="flex [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:border-marine-blue transition-colors px-4 py-2 border border-cool-gray rounded-md items-center gap-4"
            key={name}
          >
            <input
              type="checkbox"
              className="accent-purplish-blue border border-light-gray outline-none text-accent-purplish-blue w-4 h-4 focus:accent-purplish-blue focus:ring-2 ring-accent-purplish-blue rounded-sm"
              name={name}
              id={name}
            />
            <label
              className="flex justify-between  text-sm  w-full items-center"
              htmlFor={name}
            >
              <div className="flex gap-4  items-center">
                <div className="flex flex-col">
                  <h2 className=" text-marine-blue font-bold tracking-tight">
                    {addOn.title}
                  </h2>
                  <p className="text-xs text-cool-gray">{addOn.subtitle}</p>
                </div>
              </div>
              <span className="text-purplish-blue">${addOn.price}/mo</span>
            </label>
          </div>
        )
      })}
      <FormButtons isBackButtonVisible />
    </form>
  )
}
