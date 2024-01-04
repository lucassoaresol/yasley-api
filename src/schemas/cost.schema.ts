import { z } from 'zod'

export const CostCreateSchema = z.object({
  name: z.string(),
  value: z.number(),
  date: z.string(),
  category_id: z.string().uuid(),
  provider_id: z.string().uuid().optional(),
  job_id: z.string().uuid().optional(),
})

export const CostUpdateSchema = CostCreateSchema.extend({
  is_pending: z.boolean(),
})
  .omit({ date: true })
  .partial()
