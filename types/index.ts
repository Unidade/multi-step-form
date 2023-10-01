export const PLANS = ["arcade", "advanced", "pro"] as const
export const RECURRENCE = ["monthly", "yearly"] as const
export const STEPS = ["your-info", "select-plan", "add-ons", "summary"] as const

export const ADDONS = [
  {
    title: "Online service",
    price: "1",
    subtitle: "Access to multiplayer games",
    id: "online-service",
    checked: false,
  },
  {
    title: "Larger storage",
    price: "2",
    subtitle: "Extra 1TB of cloud save",
    id: "larger-storage",
    checked: false,
  },
  {
    title: "Customizable profile",
    price: "2",
    subtitle: "Custom theme on your profile",
    id: "customizable-profile",
    checked: false,
  },
]

export type AddOn = (typeof ADDONS)[number]

export type Plan = (typeof PLANS)[number]
export type PlanRecurrence = (typeof RECURRENCE)[number]
export type Step = (typeof STEPS)[number]
