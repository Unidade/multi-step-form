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

export const plansData: Plan[] = [
  {
    id: "arcade",
    name: "arcade",
    recurrence: "monthly",
    get price() {
      return this.recurrence === "monthly" ? "4" : "9"
    },
    addons: ADDONS,
  },
  {
    id: "advanced",
    name: "advanced",
    recurrence: "monthly",
    get price() {
      return this.recurrence === "monthly" ? "19" : "199"
    },
    addons: ADDONS,
  },
  {
    id: "pro",
    name: "pro",
    recurrence: "monthly",
    get price() {
      return this.recurrence === "monthly" ? "49" : "499"
    },
    addons: ADDONS,
  },
]

export const initialData: Data = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  plan: plansData[0],
}

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

export const usersSchema = z.object({
  user: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .nonempty({
        message: "Name is required",
      }),
    email: z.string().email().nonempty({
      message: "Email is required",
    }),
    phone: z
      .string({
        required_error: "Phone is required",
      })
      .regex(phoneRegex, "Invalid number")
      .nonempty({
        message: "Phone is required",
      }),
  }),
})

export const addonsSchema = z.array(
  z.object({
    id: z.string(),
    price: z.string(),
    title: z.string(),
    subtitle: z.string(),
    checked: z.boolean().default(false),
  })
)

export const planSchema = z.object({
  plan: z.object({
    id: z.string(),
    name: z.enum(PLANS),
    recurrence: z.enum(RECURRENCE),
    price: z.string(),
    addons: addonsSchema,
  }),
})

export const formSchema = usersSchema.merge(planSchema)

export type Data = z.infer<typeof formSchema>

const Addon = formSchema.shape.plan.pick({
  addons: true,
})
const Plan = formSchema.shape.plan.pick({ name: true })
const Recurrence = formSchema.shape.plan.pick({ recurrence: true })

export type Addon = z.infer<typeof Addon>["addons"][number]
export type PlanName = z.infer<typeof Plan>["name"]
export type PlanRecurrence = z.infer<typeof Recurrence>["recurrence"]
export type STEP = (typeof STEPS)[number]
export type Plan = z.infer<typeof planSchema>["plan"]
