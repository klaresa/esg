import { Document } from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Documento as DocumentoEntity } from '../entities/documento.entity';

export type DocumentoDocument = DocumentoEntity & Document;

@Schema()
export class Documento {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: () => Object, required: true })
  content: object
}

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
