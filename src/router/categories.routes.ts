import { Router } from 'express'
import {
  createCategoryController,
  listCategoryController,
  updateCategoryController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { CategoryCreateSchema, CategoryUpdateSchema } from '../schemas'

export const categoryRouter = Router()

categoryRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CategoryCreateSchema),
  createCategoryController,
)

categoryRouter.get('', verifyUserIsAuthenticated, listCategoryController)

categoryRouter.patch(
  '/:client_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CategoryUpdateSchema),
  updateCategoryController,
)
