import { Router } from 'express'
import {
  createSchoolClassController,
  createSchoolController,
  createSchoolServerController,
  dashSchoolController,
  deleteDirectorSchoolController,
  deleteSchoolController,
  deleteSchoolServerController,
  exportSchoolController,
  listSchoolController,
  listSchoolServerController,
  retrieveSchoolController,
  updateSchoolController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import {
  SchoolClassCreateSchema,
  SchoolCreateSchema,
  SchoolServerCreateSchema,
  SchoolUpdateSchema,
} from '../schemas'

export const schoolRouter = Router()

schoolRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(SchoolCreateSchema),
  createSchoolController,
)

schoolRouter.post(
  '/:server_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(SchoolServerCreateSchema),
  createSchoolServerController,
)

schoolRouter.post(
  '/:school_id/:year_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(SchoolClassCreateSchema),
  createSchoolClassController,
)

schoolRouter.get('', verifyUserIsAuthenticated, listSchoolController)

schoolRouter.get(
  '/server',
  verifyUserIsAuthenticated,
  listSchoolServerController,
)

schoolRouter.get('/export', verifyUserIsAuthenticated, exportSchoolController)

schoolRouter.get(
  '/:school_id',
  verifyUserIsAuthenticated,
  retrieveSchoolController,
)

schoolRouter.get(
  '/:school_id/dash/:year_id',
  verifyUserIsAuthenticated,
  dashSchoolController,
)

schoolRouter.patch(
  '/:school_id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(SchoolUpdateSchema),
  updateSchoolController,
)

schoolRouter.delete(
  '/:school_id',
  verifyUserIsAuthenticated,
  deleteSchoolController,
)

schoolRouter.delete(
  '/:school_id/director',
  verifyUserIsAuthenticated,
  deleteDirectorSchoolController,
)

schoolRouter.delete(
  '/:school_id/server/:server_id',
  verifyUserIsAuthenticated,
  deleteSchoolServerController,
)
