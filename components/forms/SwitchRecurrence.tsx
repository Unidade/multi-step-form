"use client"
import { motion } from "framer-motion"

export interface SwitchRecurrenceProps {
  monthlyOrYearly: PlanRecurrence
  setMonthlyOrYearly: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>
}

export function SwitchRecurrence({
  monthlyOrYearly,
  setMonthlyOrYearly,
}: SwitchRecurrenceProps) {
  const handleRecurrenceChange = () => {
    setMonthlyOrYearly((prev) => (prev === "monthly" ? "yearly" : "monthly"))
  }

  return (
    <div className="flex justify-center bg-alabaster mt-6 p-4 gap-4">
      <p className="capitalize font-bold text-marine-blue tracking-tight">monthly</p>
      <motion.div
        layout
        layoutRoot
        onClick={handleRecurrenceChange}
        className="data-[recurrence=yearly]:justify-end justify-start flex items-center bg-marine-blue w-11  rounded-xl p-[3px]"
        data-recurrence={monthlyOrYearly}
      >
        <motion.div className="h-4 w-4 rounded-full bg-white" layout />
      </motion.div>
      <p className="capitalize font-bold text-marine-blue tracking-tight">yearly</p>
    </div>
  )
}
