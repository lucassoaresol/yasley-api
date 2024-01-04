import { prisma } from '../../lib'
import { IProviderUpdateRequest } from '../../interfaces'

export const updateProviderService = async (
  { name }: IProviderUpdateRequest,
  id: string,
) => {
  const provider = await prisma.provider.update({
    where: { id },
    data: { name },
  })

  return provider
}
