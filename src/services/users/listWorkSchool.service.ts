import { IRequestUser, ISchoolQuery } from '../../interfaces'
import { prisma } from '../../lib'
import { SchoolServerArraySchema } from '../../schemas'
import { schoolServerArrayReturn } from '../../scripts'

export const listWorkSchoolService = async (
  { id: server_id }: IRequestUser,
  { take, skip, year_id, name, date }: ISchoolQuery,
) => {
  if (take) take = +take
  if (skip) skip = +skip

  let where = {}
  let where_school = {}

  where_school = { ...where_school, is_active: true }

  if (name)
    where_school = {
      ...where_school,
      name: { contains: name, mode: 'insensitive' },
    }

  if (year_id)
    where_school = { ...where_school, classes: { some: { year_id } } }

  where = { ...where, server_id, school: where_school }

  const [workSchools, total, schoolsData] = await Promise.all([
    prisma.schoolServer.findMany({
      take,
      skip,
      where,
      select: {
        school: {
          select: { id: true },
        },
      },
      orderBy: { school: { name: 'asc' } },
    }),
    prisma.schoolServer.count({
      where,
    }),
    prisma.schoolServer.findMany({
      select: {
        school: {
          select: { id: true, name: true },
        },
      },
      orderBy: { school: { name: 'asc' } },
    }),
  ])

  const schoolSchema = SchoolServerArraySchema.parse(schoolsData)

  const schools = schoolSchema.map((el) => el.school)

  const result = SchoolServerArraySchema.parse(
    await schoolServerArrayReturn(workSchools, year_id, date),
  )

  return { schools, total, result }
}
