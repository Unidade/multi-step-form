"use client"

import { Addon, ADDONS as DefaultAddons } from "@/lib/initialData"
import { FormButtons } from "./FormButtons"

import { submit } from "@/lib/submit"
import { AddOnInput } from "./AddOnInput"
import { useState } from "react"

interface AddOnFormProps {
  savedAddonsValues?: Addon[]
}

export function AddOnForm({ savedAddonsValues }: AddOnFormProps) {
  const [addons, setAddons] = useState<Addon[]>(savedAddonsValues || DefaultAddons)

  console.log(addons)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.currentTarget.name.slice(6) // remove addon- prefix
    let inputValue = e.currentTarget.checked

    console.log(inputName, inputValue)
    console.log(JSON.stringify(addons, null, 2))

    setAddons((prev) => {
      return prev.map((addon) => {
        if (addon.id === inputName) {
          return { ...addon, checked: inputValue }
        }
        return addon
      })
    })
  }

  return (
    <form className="flex flex-col gap-4" action={submit}>
      {addons.map((addOn) => {
        const name = addOn.id.toLowerCase()
        return (
          <div
            className="flex [&:has(input:checked)]:bg-alabaster [&:has(input:checked)]:border-marine-blue transition-colors px-4 py-3 border border-cool-gray rounded-md items-center gap-4"
            key={name}
          >
            <AddOnInput
              type="checkbox"
              className="accent-purplish-blue focus:outline-marine-blue border rounded-md border-light-gray outline-none text-accent-purplish-blue w-5 h-5 focus:accent-purplish-blue focus:ring-2 ring-accent-purplish-blue "
              name={name}
              id={name}
              checked={addOn.checked}
              onChange={handleOnChange}
            />
            <label className="flex justify-between   w-full items-center" htmlFor={name}>
              <div className="flex gap-4  items-center">
                <div className="flex flex-col">
                  <h2 className=" text-marine-blue text-lg font-bold tracking-tight leading-7">
                    {addOn.title}
                  </h2>
                  <p className="text-sm text-cool-gray">{addOn.subtitle}</p>
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
