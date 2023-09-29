"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

const radioCardsData = [
  {
    id: "arcade",
    value: "arcade",
    label: "Arcade",
    price: "9",
    Icon: ArcadeIcon,
  },
  {
    id: "advanced",
    value: "advanced",
    label: "Advanced",
    price: "19",
    Icon: AdvancedIcon,
  },
  {
    id: "pro",
    value: "pro",
    label: "Pro",
    price: "49",
    Icon: ProIcon,
  },
] satisfies radioCardData[]

type radioCardData = {
  id: plans
  value: plans
  label: string
  price: string
  Icon: React.FC
}

export function Form() {
  const [monthlyOrYearly, setMonthlyOrYearly] = useState<"monthly" | "yearly">("monthly")
  const [selectedPlan, setSelectedPlan] = useState<plans>("arcade")

  const handleRecurrenceChange = () => {
    setMonthlyOrYearly((prev) => (prev === "monthly" ? "yearly" : "monthly"))
  }

  const handleSelectedPlanChange = (plan: plans) => {
    setSelectedPlan(plan)
  }

  useEffect(() => {
    // @ts-ignore-next-line
    // hack to get around hydration radio mismatch
    document.querySelector(`[data-id="${selectedPlan}"]`).checked = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form className="flex flex-col gap-4 mt-2">
      {radioCardsData.map((radio) => {
        return (
          <RadioCard
            selected={selectedPlan}
            onClick={handleSelectedPlanChange}
            key={radio.id}
            {...radio}
          />
        )
      })}

      <div className="mt-4 inline-flex mx-auto gap-2 font-bold text-cool-gray">
        <span
          className={clsx("transition-colors", {
            "text-marine-blue": monthlyOrYearly === "monthly",
          })}
        >
          Monthly
        </span>
        <input
          type="checkbox"
          name="recurrence"
          className="hidden peer"
          value="monthly"
          id="monthly"
          checked={monthlyOrYearly === "monthly"}
        />
        <div
          onClick={handleRecurrenceChange}
          className="data-[isMonthly=false]:justify-end justify-start flex items-center bg-marine-blue w-11  rounded-xl p-[3px]"
          data-isMonthly={monthlyOrYearly === "monthly" ? "true" : "false"}
        >
          <motion.div
            transition={spring}
            className="h-4 w-4 rounded-full bg-white"
            layout
          />
        </div>
        <span
          className={clsx("transition-colors", {
            "text-marine-blue": monthlyOrYearly === "yearly",
          })}
        >
          Yearly
        </span>
      </div>

      <div className="absolute w-full flex justify-between bottom-[-50px] right-0">
        <button
          type="submit"
          className="px-4 py-2 transition-all hover:text-marine-blue text-cool-gray rounded-md"
        >
          Go Back
        </button>
        <button type="submit" className="bg-marine-blue px-4 py-2 text-white rounded-md">
          Next Step
        </button>
      </div>
    </form>
  )
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
}

interface RadioCardProps {
  id: string
  value: plans
  label: string
  price: string
  Icon: React.FC
  selected: string
  onClick: (e: plans) => void
}
type plans = "arcade" | "advanced" | "pro"

function RadioCard({ id, value, label, price, Icon, selected, onClick }: RadioCardProps) {
  return (
    <div>
      <input
        className="hidden peer"
        type="radio"
        name="plan"
        id={id}
        value={value}
        required
        data-id={id}
        checked={value === selected}
      />
      <label
        htmlFor={id}
        onClick={() => onClick(value)}
        className="flex gap-4 text-sm  items-center p-4 rounded-lg border border-light-gray transition-all peer-checked:border-marine-blue peer-checked:bg-alabaster text-marine-blue "
      >
        <Icon />
        <div>
          <h2 className="font-bold text-lg tracking-tight">{label}</h2>
          <p className="text-cool-gray">${price}/mo</p>
        </div>
      </label>
    </div>
  )
}

function ArcadeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
        />
      </g>
    </svg>
  )
}

function AdvancedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#F9818E" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
        />
      </g>
    </svg>
  )
}

function ProIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#483EFF" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        />
      </g>
    </svg>
  )
}
