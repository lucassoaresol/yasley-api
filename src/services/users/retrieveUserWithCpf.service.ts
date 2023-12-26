import { AppError } from '../../errors'
import { IUserQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const retrieveUserWithCpfService = async (
  login: string,
  { school_id, allNotServ, director }: IUserQuery,
) => {
  const user = await prisma.user.findUnique({
    where: { login },
    select: { name: true },
  })

  if (school_id) {
    if (director) {
      const server = await prisma.schoolServer.findFirst({
        where: {
          server: { login },
          school_id,
        },
      })

      if (!user) return { name: '' }

      if (server) throw new AppError('user already exists', 409)

      return user
    }

    const server = await prisma.schoolServer.findFirst({
      where: {
        server: { login },
        school_id,
      },
    })

    if (!user) return { name: '' }

    if (server) throw new AppError('user already exists', 409)

    return user
  }

  if (director) {
    if (!user) return { name: '' }

    return user
  }

  if (allNotServ) {
    if (user) throw new AppError('user already exists', 409)
    return { name: '' }
  }

  if (!user) throw new AppError('user not found', 404)

  return user
}
