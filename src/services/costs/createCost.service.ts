import { prisma } from '../../lib'
import { ICostRequest } from '../../interfaces'

export const createCostService = async (
  { category_id, date, name, value, job_id, provider_id }: ICostRequest,
  user_id: string,
) => {
  const dateData = date.split('/')
  const date_time = new Date(`${dateData[2]}-${dateData[1]}-${dateData[0]}`)

  const cost = await prisma.cost.create({
    data: {
      category_id,
      date,
      date_time,
      name,
      value,
      job_id,
      provider_id,
      user_id,
    },
  })

  return cost
}
