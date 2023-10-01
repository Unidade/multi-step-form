import { submit } from "@/lib/submit"
import { FormButtons } from "../FormButtons"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { PageTitle } from "@/components/typography/PageTitle"
import { twMerge } from "tailwind-merge"

export default function Home() {
  return (
    <div>
      <PageTitle className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        personal info
      </PageTitle>
      <p className="text-cool-gray text-sm mt-2">
        Please fill in the information below and your goal for digital saving.
      </p>

      <form action={submit} className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col-reverse">
          <UserInput
            placeholder="e.g Stephen King"
            type="text"
            name="name"
            id="name"
            required
          />
          <div className="flex justify-between peer-invalid:[&>span]:block">
            <label className="capitalize text-marine-blue" htmlFor="name">
              name
            </label>
            <span className="hidden  text-xs font-bold text-strawberry-red">
              This field is required
            </span>
          </div>
        </div>
        <div className="flex group flex-col-reverse">
          <UserInput
            placeholder="e.g stephenking@lorem.com"
            type="email"
            name="email"
            id="email"
            required
          />
          <div className="flex justify-between peer-invalid:[&>span]:block">
            <label className="capitalize text-marine-blue" htmlFor="email">
              email Address
            </label>
            <span className="hidden  text-xs font-bold text-strawberry-red">
              This field is required
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <UserInput
            placeholder="e.g +1 234 5676 890"
            type="tel"
            name="phone"
            id="phone"
            required
            list="defaultTels"
          />
          <div className="flex justify-between peer-invalid:[&>span]:block">
            <label className="capitalize text-marine-blue" htmlFor="phone">
              Phone Number
            </label>
            <span className="hidden  text-xs font-bold text-strawberry-red">
              This field is required
            </span>
          </div>
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
  return (
    <input
      {...props}
      className={twMerge(
        "w-full pl-4 rounded-sm peer lg:rounded-md focus:outline-purplish-blue invalid:border-strawberry-red placeholder:text-cool-gray border border-cool-gray py-2",
        props.className
      )}
      name={`user-${props.name}`}
    />
  )
}
