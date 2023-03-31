import { Empresa } from "../empresa/interfaces/empresa.interface";
import { Documento } from "../documento/interfaces/documento.interface";

export class UpdateAvaliacaoDto {
  avaliacaoNome: string
  empresa: Empresa
  documento: Documento
}
