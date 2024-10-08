export interface ICorreios {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class CEPAbstract {
  cep: string = '';
  street: string = '';
  complement: string = '';
  unidade: string = '';
  neighborhood: string = '';
  city: string = '';
  uf: string = '';
  state: string = '';
  region: string = '';
  ibge: string = '';
  gia: string = '';
  ddd: string = '';
  siafi: string = '';

  constructor(val: ICorreios) {
    this.cep = val?.cep;
    this.street = val?.logradouro;
    this.complement = val?.complemento;
    this.unidade = val?.unidade;
    this.neighborhood = val?.bairro;
    this.city = val?.localidade;
    this.uf = val?.uf;
    this.state = val?.estado;
    this.region = val?.regiao;
    this.ibge = val?.ibge;
    this.gia = val?.gia;
    this.ddd = val?.ddd;
    this.siafi = val?.siafi;
  }
}
