import { z } from 'zod'
import { ClientCreateSchema, ClientUpdateSchema } from '../schemas'

export type IClientRequest = z.infer<typeof ClientCreateSchema>

export type IClientUpdateRequest = z.infer<typeof ClientUpdateSchema>
