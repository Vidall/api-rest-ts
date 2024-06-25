import { server } from './server/Server';

/* eslint-disable no-undef */
server.listen(process.env.PORT||3001, () => {
  console.log('Backend executando');
});