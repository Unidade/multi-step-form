import { StepIndicator } from "./StepIndicator"

export function SideBarDesktop() {
  return (
    <div className="hidden pl-10 pt-10 md:flex-shrink-0 md:flex w-[274px] h-[568px] bg-no-repeat bg-cover justify-start  bg-[url('../public/assets/images/bg-sidebar-desktop.svg')]">
      <StepIndicator className="m-0 gap-6" />
    </div>
  )
}
