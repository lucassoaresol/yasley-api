import { Request, Response } from 'express'
import {
  createCategoryService,
  listCategoryService,
  updateCategoryService,
} from '../services'

export const createCategoryController = async (req: Request, res: Response) => {
  const category = await createCategoryService(req.body)
  return res.status(201).json(category)
}

export const listCategoryController = async (req: Request, res: Response) => {
  const categories = await listCategoryService()
  return res.json(categories)
}

export const updateCategoryController = async (req: Request, res: Response) => {
  const category = await updateCategoryService(req.body, req.params.category_id)
  return res.json(category)
}
