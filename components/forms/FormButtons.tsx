"use client"
import { twMerge } from "tailwind-merge"
import { usePathname } from "next/navigation"
import { validStepType, validSteps } from "../StepIndicator"
import Link from "next/link"

export function FormButtons() {
  const currentStep = usePathname().replace("/", "") as validStepType

  const currentStepIndex = validSteps.indexOf(currentStep)

  const isBackButtonVisible = currentStepIndex > 0
  const isNextButtonVisible = currentStepIndex < validSteps.length - 1

  const backStepPath = isBackButtonVisible ? `/${validSteps[currentStepIndex - 1]}` : null

  return (
    <div
      className={twMerge(
        "absolute w-full flex justify-between bottom-[-50px] md:flex-1 md:items-end right-0 md:static md:pt-4 ",
        !isBackButtonVisible && "justify-end"
      )}
    >
      {isBackButtonVisible && (
        <Link
          className="px-4 py-2 transition-all hover:text-marine-blue text-cool-gray rounded-md"
          href={backStepPath as string}
        >
          Go Back
        </Link>
      )}
      {isNextButtonVisible ? (
        <button type="submit" className="bg-marine-blue px-4 py-2 text-white rounded-md">
          Next Step
        </button>
      ) : (
        <ConfirmButton />
      )}
    </div>
  )
}

function ConfirmButton() {
  return (
    <button
      type="submit"
      className="bg-purplish-blue px-4 py-2 text-white rounded-md hover:bg-pastel-blue transition-colors"
    >
      Confirm
    </button>
  )
}
