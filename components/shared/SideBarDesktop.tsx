"use client"
import { transitionSpring } from "@/lib/animtation"
import { StepIndicator } from "./StepIndicator"
import { motion } from "framer-motion"

export function SideBarDesktop() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transitionSpring}
      className="hidden pl-10 pt-10 md:flex-shrink-0 md:flex w-[274px] h-[568px] bg-no-repeat bg-cover justify-start  bg-[url('../public/assets/images/bg-sidebar-desktop.svg')]"
    >
      <StepIndicator className="m-0 gap-6" />
    </motion.div>
  )
}
