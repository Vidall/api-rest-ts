import * as createPessoaJuridica from './CreatePessoaJuridica';
import * as createPessoaFisica from './CreatePessoaFisica';


export const clientsControllers = {
  ...createPessoaJuridica,
  ...createPessoaFisica
};