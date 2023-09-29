import clsx from "clsx"

const NUMBER_OF_STEPS = 4

const steps = Array(NUMBER_OF_STEPS).fill(null)

export default function Home() {
  return (
    <main className="grid bg-magnolia place-items-baseline  lg:place-content-center">
      <SidebarMobile className="fixed w-full h-auto" />
      <div className="px-4 relative">
        <div className="relative">
          <div className="flex justify-center flex-col pb-8  t-4 gap-8">
            <ul className="inline-flex gap-4 mx-auto ">
              {steps.map((_, idx) => {
                const isActive = idx === 0

                return (
                  <li
                    className={clsx(
                      "border rounded-full text-white w-8 h-8 flex items-center justify-center",
                      {
                        "bg-light-blue text-marine-blue border-cool-gray": isActive,
                      }
                    )}
                    key={idx}
                  >
                    <button className="h-full w-full" type="button">
                      {idx + 1}
                    </button>
                  </li>
                )
              })}
            </ul>
            <div className="bg-white shadow-2xl shadow-light-blue rounded-md px-6 py-8">
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
                <div className="absolute w-full flex justify-between bottom-[-50px] right-0">
                  <button
                    type="submit"
                    className="bg-marine-blue px-4 py-2 text-white rounded-md ml-auto"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function SidebarMobile({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width="375"
      height="172"
      viewBox="0 0 375 172"
    >
      <defs>
        <path id="a" d="M0 0h375v172H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" fill="#483EFF" />
        <g mask="url(#b)">
          <g transform="translate(-151.029 -133.957)">
            <path
              fill="#6259FF"
              d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"
            />
            <ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373" />
            <path
              fill="#F9818E"
              d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"
            />
            <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="5">
              <path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
