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

export const getAll = async (req: Request<IQueryProps>, res: Response) => {

  const FalseParams:IQueryProps = {
    id: Number(req.query.id) | 1 ,
    page: Number(req.query.page)| 2,
    limit: Number(req.query.limit)| 2,
    filter: ''
  };  

  const getParams = (FalseParams: IQueryProps) => {
    return FalseParams;
  }; 

  const result = getParams({
    ...FalseParams
  });

  return res.status(StatusCodes.OK).json(result);
};