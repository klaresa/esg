import { Contato } from "./contato.interface";


export interface Empresa {
  _id: string
  userId: string
  nome: string
  contato: Contato
}
