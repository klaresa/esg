import {Get, Injectable} from '@nestjs/common';
// import { Documento, AlunoServiceInt } from "./AlunoServiceInt";
import { DocumentoRepository } from "./app.repository";
import { CreateDocumentoDto } from "./dto/create-documento.dto";
import { Documento } from "./entities/documento.entity";


@Injectable()
export class AppService {

  constructor(
      private readonly documentoRepository: DocumentoRepository,
  ) {}

  async findAll(): Promise<Documento[]> {
    return await this.documentoRepository.findAll();
  }

  async create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
    return this.documentoRepository.create({
      name: createDocumentoDto.name,
      description: createDocumentoDto.description,
      content: createDocumentoDto.content
    });
  }

  async findByName(name: string): Promise<Documento> {
    return await this.documentoRepository.findByName({ name });
  }

  async findOne(id: string): Promise<Documento> {
    return await this.documentoRepository.findOne({ _id: id });
  }
}
