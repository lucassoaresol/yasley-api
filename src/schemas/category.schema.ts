import { z } from 'zod'

export const CategoryCreateSchema = z.object({
  name: z.string(),
})

export const CategoryUpdateSchema = CategoryCreateSchema.partial()
