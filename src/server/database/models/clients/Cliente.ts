interface Endereco {
  rua: string,
  numero: number,
  bairro: string,
  cidade: string,
}

export interface IPessoaFisica{
  nome: string,
  endereco: Endereco,
  cpf: string,
  tipo: 'fisico'
}

export interface IpessoaJuridica{
  nome: string,
  endereco: Endereco,
  cnpj: string,
  tipo: 'juridico'
}