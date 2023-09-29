import { twMerge } from "tailwind-merge"

export function FormButtons({
  isBackButtonVisible = false,
}: {
  isBackButtonVisible?: boolean
}) {
  console.log(!isBackButtonVisible)
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
          Go Back
        </button>
      )}
      <button type="submit" className="bg-marine-blue px-4 py-2 text-white rounded-md">
        Next Step
      </button>
    </div>
  )
}
