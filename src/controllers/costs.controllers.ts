import { Request, Response } from 'express'
import { createCostService, updateCostService } from '../services'

export const createCostController = async (req: Request, res: Response) => {
  const cost = await createCostService(req.body, req.user.id)
  return res.status(201).json(cost)
}

export const updateCostController = async (req: Request, res: Response) => {
  const cost = await updateCostService(req.body, req.params.cost_id)
  return res.json(cost)
}
