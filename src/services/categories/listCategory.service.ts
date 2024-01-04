import { prisma } from '../../lib'

export const listCategoryService = async () => {
  const categories = await prisma.category.findMany()

  return categories
}
