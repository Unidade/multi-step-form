import { submit } from "@/lib/submit"
import { FormButtons } from "../FormButtons"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export default function Home() {
  return (
    <div>
      <h1 className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        personal info
      </h1>
      <p className="text-cool-gray text-sm mt-2">
        Please fill in the information below and your goal for digital saving.
      </p>

      <form action={submit} className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="name">
            name
          </label>
          <UserInput
            placeholder="e.g Stephen King"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="name">
            email Address
          </label>
          <UserInput
            placeholder="e.g stephenking@lorem.com"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="phone">
            Phone Number
          </label>
          <UserInput
            placeholder="e.g +1 234 5676 890"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="tel"
            name="phone"
            id="phone"
            required
            list="defaultTels"
          />
        </div>
        <datalist className="bg-white [&>*]:bg-white" id="defaultTels">
          <option className="bg-white" value="111-1111-1111"></option>
          <option value="122-2222-2222"></option>
          <option value="333-3333-3333"></option>
          <option value="344-4444-4444"></option>
        </datalist>
        <FormButtons />
      </form>
    </div>
  )
}

function UserInput(
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return <input {...props} name={`user-${props.name}`} />
}
