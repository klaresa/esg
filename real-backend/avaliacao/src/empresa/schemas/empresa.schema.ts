import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Empresa as EmpresaEntity } from '../interfaces/empresa.interface';
import {Contato} from "./contato.schema";

export type EmpresaDocument = EmpresaEntity & Document;

@Schema()
export class Empresa {
  @Prop()
  _id: string

  @Prop()
  userId: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ type: () => Contato, required: true })
  contato: Contato
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
