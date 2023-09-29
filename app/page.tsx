import { FormButtons } from "./FormButtons"

export default function Home() {
  return (
    <div>
      <h1 className="text-xl capitalize text-marine-blue font-bold tracking-tight rounded-lg">
        personal info
      </h1>
      <p className="text-cool-gray text-sm mt-2">
        Please fill in the information below and your goal for digital saving.
      </p>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="name">
            name
          </label>
          <input
            placeholder="e.g Stephen King"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="name">
            email Address
          </label>
          <input
            placeholder="e.g Stephen King"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-marine-blue" htmlFor="phone">
            Phone Number
          </label>
          <input
            placeholder="e.g Stephen King"
            className="w-full pl-4 placeholder:text-cool-gray border rounded-sm border-cool-gray py-2"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <FormButtons />
      </form>
    </div>
  )
}
