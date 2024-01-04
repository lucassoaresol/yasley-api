import { z } from 'zod'
import { ProviderCreateSchema, ProviderUpdateSchema } from '../schemas'

export type IProviderRequest = z.infer<typeof ProviderCreateSchema>

export type IProviderUpdateRequest = z.infer<typeof ProviderUpdateSchema>
