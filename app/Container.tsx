import { SideBarDesktop } from "./SideBarDesktop"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid bg-magnolia mt-8 pb-4 md:pb-0 md:mt-0 md:min-h-screen md:bg-light-blue place-items-center  lg:place-content-center">
      <div className="px-4 relative">
        <div className="relative z-20 w-max mx-auto">
          <div className="flex justify-center flex-col pt-4 gap-8">
            <div className="bg-white md:max-w-none max-w-md md:min-h-max md:p-2 pb-12 md:pr-10 shadow-sm shadow-light-blue rounded-md px-6 py-8 md:flex md:items-center md:gap-12 w-[720px]">
              <SideBarDesktop />
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
