import * as create from './Create';
import * as GetById from './GetById';
import * as GetAll from './GetAll';

export const clientsFisicoControllers = {
  ...create,
  ...GetById,
  ...GetAll
};