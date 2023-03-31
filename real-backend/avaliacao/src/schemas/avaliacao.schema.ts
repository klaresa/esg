import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory}  from "@nestjs/mongoose";
import { Avaliacao as AvaliacaoEntity } from '../entities/avaliacao.entity';
import { Empresa } from '../empresa/schemas/empresa.schema';
import { Documento } from '../documento/schemas/documento.schema';


export type AvaliacaoDocument = AvaliacaoEntity & Document;

@Schema()
export class Avaliacao {
  @Prop({ required: true} )
  avaliacaoNome: string

  @Prop({ type: () => Empresa, required: true })
  empresa: Empresa

  @Prop({ type: () => Documento, required: true })
  documento: Documento
}

export const AvaliacaoSchema = SchemaFactory.createForClass(Avaliacao);
