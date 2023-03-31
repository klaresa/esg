import { Empresa } from '../empresa/interfaces/empresa.interface';
import { Documento } from '../documento/interfaces/documento.interface';

export class Avaliacao {
  _id?: string
  avaliacaoNome: string
  documento: Documento
  empresa: Empresa
}
