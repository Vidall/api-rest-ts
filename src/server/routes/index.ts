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

router.post('/cliente/pessoaFisica', clientsFisicoControllers.createValidation, clientsFisicoControllers.create);
router.post('/cliente/pessoaJuridica', clientsJuridicoControllers.createValidation, clientsJuridicoControllers.create);



export { router };