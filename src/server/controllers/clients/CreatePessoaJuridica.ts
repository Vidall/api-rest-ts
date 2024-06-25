import { Request, Response } from 'express';
import * as yup from 'yup';
import { cnpj } from 'cpf-cnpj-validator';

import statusCodes from 'http-status-codes';
import { validation } from '../../shared/middlewares/validation';

interface Endereco {
  rua: string,
  numero: number,
  bairro: string,
  cidade: string,
}

interface IBodyProps{
  nome: string,
  endereco: Endereco,
  cnpj: string,
  tipo: 'juridica'
}

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
  tipo: yup.string().oneOf(['juridica']).required()
});


export const createValidationPessoaJuridica = validation((getSchema) => ({
  body: getSchema<IBodyProps>(bodySchema)
}));




export const createPessoaJuridica = async (req: Request, res: Response) => {
  console.log(req.body);

  return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('Ainda não implementado');
};