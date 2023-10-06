import { z } from "zod"

export const PLANS = ["arcade", "advanced", "pro"] as const
export const RECURRENCE = ["monthly", "yearly"] as const
export const STEPS = [
  "your-info",
  "select-plan",
  "add-ons",
  "summary",
  "confirmed",
] as const

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
    price: "3",
    subtitle: "Custom theme on your profile",
    id: "customizable-profile",
    checked: false,
  },
]

export const initialData: Data = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    name: "arcade",
    recurrence: "monthly",
    price: "9",
    addons: ADDONS,
  },
}

export const schema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
  plan: z.object({
    name: z.enum(PLANS),
    recurrence: z.enum(RECURRENCE),
    price: z.string(),
    addons: z.array(
      z.object({
        id: z.string(),
        price: z.string(),
        title: z.string(),
        subtitle: z.string(),
        checked: z.boolean().default(false),
      })
    ),
  }),
})

export type Data = z.infer<typeof schema>

const Addon = schema.shape.plan.pick({
  addons: true,
})
const Plan = schema.shape.plan.pick({ name: true })
const Recurrence = schema.shape.plan.pick({ recurrence: true })

export type Addon = z.infer<typeof Addon>["addons"][number]
export type PlanName = z.infer<typeof Plan>["name"]
export type PlanRecurrence = z.infer<typeof Recurrence>["recurrence"]
export type STEP = (typeof STEPS)[number]
