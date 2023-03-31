import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Avaliacao, AvaliacaoDocument } from "./schemas/avaliacao.schema";

@Injectable()
export class AvaliacaoRepository {

  constructor(@InjectModel(Avaliacao.name) private model: Model<AvaliacaoDocument>) {}

  async create(avaliacao: Avaliacao): Promise<Avaliacao>{
    return new this.model(avaliacao).save();
  }

  async findAll(): Promise<Avaliacao[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<Avaliacao>): Promise<Avaliacao> {
    console.log(`name repo: ${JSON.stringify(filterQuery)}`)

    return this.model.findOne({ _id: filterQuery });
  }

  async update(filterQuery: FilterQuery<Avaliacao>, nota: Partial<Avaliacao>): Promise<Avaliacao> {
    return this.model.findOneAndReplace(filterQuery, nota,{ new: true } );
  }

  async findByName(filterQuery: FilterQuery<Avaliacao>): Promise<Avaliacao> {
    return this.model.findOne({ avaliacaoNome: filterQuery} );
  }
}
