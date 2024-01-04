import { z } from 'zod'
import { CategoryCreateSchema, CategoryUpdateSchema } from '../schemas'

export type ICategoryRequest = z.infer<typeof CategoryCreateSchema>

export type ICategoryUpdateRequest = z.infer<typeof CategoryUpdateSchema>
