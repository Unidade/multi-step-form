"use client"

import { twMerge } from "tailwind-merge"
import { usePathname } from "next/navigation"
import { validStepType, validSteps } from "./StepIndicator"
import Link from "next/link"

function getNextStepHref(currentStep: validStepType) {
  const currentStepIndex = validSteps.indexOf(currentStep)
  const nextStep = validSteps[currentStepIndex + 1]
  if (!nextStep) throw new Error("No next step")
  return `/${nextStep}`
}

function getBackHref(currentStep: validStepType) {
  const currentStepIndex = validSteps.indexOf(currentStep)
  const backStep = validSteps[currentStepIndex - 1]
  if (!backStep) throw new Error("No back step")
  return `/${backStep}`
}

export function FormButtons({
  isBackButtonVisible = false,
}: {
  isBackButtonVisible?: boolean
}) {
  const pathname = usePathname()

  const currentStep = pathname.replace("/", "") as validStepType
  const nextStepPath = getNextStepHref(currentStep)
  const backStepPath = getBackHref(currentStep)

  return (
    <div
      className={twMerge(
        "absolute w-full flex justify-between bottom-[-50px] right-0",
        !isBackButtonVisible && "justify-end"
      )}
    >
      {isBackButtonVisible && (
        <button
          type="submit"
          className="px-4 py-2 transition-all hover:text-marine-blue text-cool-gray rounded-md"
        >
          <Link href={backStepPath}>Go Back</Link>
        </button>
      )}
      <button type="submit" className="bg-marine-blue px-4 py-2 text-white rounded-md">
        <Link href={nextStepPath}>Next Step</Link>
      </button>
    </div>
  )
}
