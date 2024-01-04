import { Router } from 'express'
import { createCostController, updateCostController } from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { CostCreateSchema, CostUpdateSchema } from '../schemas'

export const costRouter = Router()

costRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CostCreateSchema),
  createCostController,
)

costRouter.patch(
  '/:cost_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CostUpdateSchema),
  updateCostController,
)
