import { prisma } from '../../lib'
import { ICategoryUpdateRequest } from '../../interfaces'
import { AppError } from '../../errors'

export const updateCategoryService = async (
  { name }: ICategoryUpdateRequest,
  id: string,
) => {
  try {
    const category = await prisma.category.update({
      where: { id },
      data: { name },
    })

    return category
  } catch {
    throw new AppError('category not found', 404)
  }
}
