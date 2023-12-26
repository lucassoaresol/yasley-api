import { z } from 'zod'

export const UserCreateSchema = z.object({
  login: z.string(),
  name: z.string(),
  password: z.string(),
  cpf: z.string(),
})

const WorkSchoolSchema = z.object({
  dash: z.enum(['COMMON', 'SCHOOL', 'ORGAN', 'ADMIN']),
  role: z.enum(['SERV', 'DIRET', 'SECRET', 'ADMIN']),
  school: z.object({ id: z.string().uuid(), name: z.string() }),
})

export const UserReturnSchema = UserCreateSchema.extend({
  id: z.string().uuid(),
  email: z.string().nullable(),
  created_at: z.date(),
  is_active: z.boolean(),
  is_first_access: z.boolean(),
  frequencies: z.number().optional(),
  work_school: WorkSchoolSchema.optional(),
  profile: z.object({ url: z.string().url() }).nullable().optional(),
}).omit({ password: true })

export const UserUpdateRequestSchema = UserCreateSchema.extend({
  email: z.string().email(),
  old_password: z.string(),
  is_active: z.boolean().optional(),
  is_first_access: z.boolean().optional(),
})
  .omit({ login: true, cpf: true })
  .partial()

export const UserArraySchema = UserReturnSchema.array()
