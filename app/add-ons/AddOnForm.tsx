"use client"

import { ADDONS } from "@/types"
import { FormButtons } from "../FormButtons"
import Cookies from "js-cookie"

export function AddOnForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const currentData = Cookies.get("data")
    console.log(currentData)
    console.log(data)
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {ADDONS.map((addOn) => {
        const name = addOn.id.toLowerCase()
        return (
          <div
            className="flex [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:border-marine-blue transition-colors px-4 py-2 border border-cool-gray rounded-md items-center gap-4"
            key={name}
          >
            <input
              type="checkbox"
              className="accent-purplish-blue border rounded-md border-light-gray outline-none text-accent-purplish-blue w-5 h-5 focus:accent-purplish-blue focus:ring-2 ring-accent-purplish-blue "
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
      <FormButtons />
    </form>
  )
}
