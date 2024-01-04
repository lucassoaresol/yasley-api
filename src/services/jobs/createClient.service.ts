import { prisma } from '../../lib'
import { IClientRequest } from '../../interfaces'

export const createClientService = async ({ name }: IClientRequest) => {
  const client = await prisma.client.create({ data: { name } })

  return client
}
