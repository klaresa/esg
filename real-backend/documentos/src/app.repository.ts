import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {FilterQuery, Model} from "mongoose";
import { DocumentoDocument } from "./schemas/documento.schema";
import { Documento } from "./entities/documento.entity";

@Injectable()
export class DocumentoRepository {

  constructor(@InjectModel(Documento.name) private model: Model<DocumentoDocument>) {}

  async create(documento: Documento): Promise<Documento>{
    return new this.model(documento).save();
  }

  async findAll(): Promise<Documento[]> {
    return this.model.find().exec();
  }

  async findByName(filterQuery: FilterQuery<Documento>): Promise<Documento> {
    return this.model.findOne(filterQuery );
  }

  async findOne(filterQuery: FilterQuery<Documento>): Promise<Documento> {
    return this.model.findOne({ _id: filterQuery });
  }
}
