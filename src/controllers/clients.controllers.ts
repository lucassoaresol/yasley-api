import { Request, Response } from 'express'
import { createClientService, updateClientService } from '../services'

export const createClientController = async (req: Request, res: Response) => {
  const client = await createClientService(req.body)
  return res.status(201).json(client)
}

export const updateClientController = async (req: Request, res: Response) => {
  const client = await updateClientService(req.body, req.params.client_id)
  return res.json(client)
}
