import { Router } from 'express'
import { createClientController, updateClientController } from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ClientCreateSchema, ClientUpdateSchema } from '../schemas'

export const clientRouter = Router()

clientRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ClientCreateSchema),
  createClientController,
)

clientRouter.patch(
  '/:client_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ClientUpdateSchema),
  updateClientController,
)
