import { z } from 'zod'
import { CostCreateSchema, CostUpdateSchema } from '../schemas'

export type ICostRequest = z.infer<typeof CostCreateSchema>

export type ICostUpdateRequest = z.infer<typeof CostUpdateSchema>
