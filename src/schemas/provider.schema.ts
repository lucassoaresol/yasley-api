import { z } from 'zod'

export const ProviderCreateSchema = z.object({
  name: z.string(),
})

export const ProviderUpdateSchema = ProviderCreateSchema.partial()
