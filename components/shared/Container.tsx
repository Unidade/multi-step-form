"use client"
import { motion } from "framer-motion"
import { SideBarDesktop } from "./SideBarDesktop"
import { transitionSpring } from "@/lib/animtation"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid bg-magnolia mt-8 pb-4 md:pb-0 md:mt-0 md:min-h-screen md:bg-magnolia place-items-center  lg:place-content-center">
      <div className="px-4 relative">
        <div className="relative z-20 w-max mx-auto">
          <div className="flex justify-center flex-col pt-4 gap-8">
            <div className="bg-white md:min-h-max md:max-w-none max-w-md  md:p-2 pb-12 md:pr-10 shadow-sm shadow-light-blue rounded-md px-6 py-8 md:flex md:items-center md:gap-12 w-[720px]">
              <SideBarDesktop />
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={transitionSpring}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
