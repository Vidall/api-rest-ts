import { Request, Response } from 'express';
import * as yup from 'yup';
import { cnpj } from 'cpf-cnpj-validator';

import statusCodes from 'http-status-codes';
import { validation } from '../../../shared/middlewares/validation';
import {IpessoaJuridica} from '../../../database/models';

const enderecoSchema = yup.object().shape({
  rua: yup.string().required(),
  numero: yup.number().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
});

const bodySchema = yup.object().shape({
  nome: yup.string().required().min(3),
  endereco: enderecoSchema.required(),
  cnpj: yup.string().required().test('cnpj', 'cnpj inválido', value => cnpj.isValid(value || '')),
  tipo: yup.string().oneOf(['juridico']).required()
});


export const createValidationPessoaJuridica = validation((getSchema) => ({
  body: getSchema<IpessoaJuridica>(bodySchema)
}));




export const createPessoaJuridica = async (req: Request, res: Response) => {
  console.log(req.body);

  return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('Ainda não implementado');
};