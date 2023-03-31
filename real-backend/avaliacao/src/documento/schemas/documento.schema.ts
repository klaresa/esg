import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Documento as DocumentoEntity } from '../interfaces/documento.interface';

export type DocumentoDocument = DocumentoEntity & Document;

@Schema()
export class Documento {
  @Prop()
  _id: string

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: () => Array, required: true })
  content: object[]
}

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
