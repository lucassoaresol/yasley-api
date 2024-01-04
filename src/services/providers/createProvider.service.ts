import { prisma } from '../../lib'
import { IProviderRequest } from '../../interfaces'

export const createProviderService = async ({ name }: IProviderRequest) => {
  const provider = await prisma.provider.create({ data: { name } })

  return provider
}
