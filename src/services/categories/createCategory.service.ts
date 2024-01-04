import { prisma } from '../../lib'
import { ICategoryRequest } from '../../interfaces'
import { AppError } from '../../errors'

export const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categoryData = await prisma.category.findUnique({ where: { name } })

  if (categoryData) throw new AppError('category already exists', 409)

  const category = await prisma.category.create({ data: { name } })

  return category
}
