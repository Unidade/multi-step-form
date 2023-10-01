import { ADDONS } from "@/types"
import { RECURRENCE, PLANS } from "@/types"
import { z } from "zod"

export const initialData: Data = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    name: "arcade",
    type: "monthly",
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
    type: z.enum(RECURRENCE),
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
