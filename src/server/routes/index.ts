import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { clientsControllers } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.send({'name': 'luan'});
});

router.get('/teste', (req, res) => {
  return res.status(StatusCodes.CREATED).send('Primeiro teste');
});

router.post('/cliente/pessoaFisica', clientsControllers.createValidationPessoaFisica, clientsControllers.createPessoaFisica);
router.post('/cliente/pessoaJuridica', clientsControllers.createValidationPessoaJuridica, clientsControllers.createPessoaJuridica);



export { router };