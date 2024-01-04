import { z } from 'zod'

export const ClientCreateSchema = z.object({
  name: z.string(),
})

export const ClientUpdateSchema = ClientCreateSchema.partial()
