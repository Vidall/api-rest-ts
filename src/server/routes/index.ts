import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { clientsFisicoControllers, clientsJuridicoControllers } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.send({'name': 'luan'});
});

router.get('/teste', (req, res) => {
  return res.status(StatusCodes.CREATED).send('Primeiro teste');
});

//Pessoa fisica
router.post('/clientes/pessoaFisica', clientsFisicoControllers.createValidation, clientsFisicoControllers.create);
router.get('/clientes/pessoaFisica/:id', clientsFisicoControllers.GetByIdValidator, clientsFisicoControllers.GetById);
router.get('/clientes/pessoaFisica', clientsFisicoControllers.getAll, clientsFisicoControllers.getAll);

//Pessoa juridica
router.get('/clientes/pessoaJuridica/:id', clientsJuridicoControllers.GetByIdValidator, clientsJuridicoControllers.GetById);
router.post('/clientes/pessoaJuridica', clientsJuridicoControllers.createValidation, clientsJuridicoControllers.create);



export { router };