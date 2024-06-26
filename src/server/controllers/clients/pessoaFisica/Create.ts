import { Request, Response } from 'express';
import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

import statusCodes from 'http-status-codes';
import { validation } from '../../../shared/middlewares/validation';
import {IPessoaFisica} from '../../../database/models';

const enderecoSchema = yup.object().shape({
  rua: yup.string().required(),
  numero: yup.number().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
});

const bodySchema = yup.object().shape({
  nome: yup.string().required().min(3),
  endereco: enderecoSchema.required(),
  cpf: yup.string().required().test('cpf', 'cpf inválido', value => cpf.isValid(value || '')),
  tipo: yup.string().oneOf(['fisico']).required()
});

export const createValidation = validation((getSchema) => ({
  body: getSchema<IPessoaFisica>(bodySchema)
}));

export const create = async (req: Request, res: Response) => {
  console.log(req.body);

  return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('Ainda não implementado');
};