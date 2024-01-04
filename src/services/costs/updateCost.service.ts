import { prisma } from '../../lib'
import { ICostUpdateRequest } from '../../interfaces'

export const updateCostService = async (
  {
    category_id,
    is_pending,
    job_id,
    name,
    provider_id,
    value,
  }: ICostUpdateRequest,
  id: string,
) => {
  const cost = await prisma.cost.update({
    where: { id },
    data: { category_id, is_pending, job_id, name, provider_id, value },
  })

  return cost
}
