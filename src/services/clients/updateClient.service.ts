import { prisma } from '../../lib'
import { IClientUpdateRequest } from '../../interfaces'

export const updateClientService = async (
  { name }: IClientUpdateRequest,
  id: string,
) => {
  const client = await prisma.client.update({ where: { id }, data: { name } })

  return client
}
