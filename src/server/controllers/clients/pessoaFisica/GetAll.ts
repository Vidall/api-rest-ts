import * as yup from 'yup';

import { validation } from '../../../shared/middlewares/validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  id?: number,
  page?: number,
  limit?: number,
  filter?: string
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
    id: yup.number().integer().optional().default(0)
  }))
}));

console.log('ola mundo');

export const getAll = async (req: Request<IQueryProps>, res: Response) => {
  
  const result = req.query;

  return res.status(StatusCodes.OK).json(result);
};