import { Get, HttpException, Injectable } from '@nestjs/common';

import { Avaliacao } from "./entities/avaliacao.entity";
import { CreateAvaliacaoDto } from "./dto/create-avaliacao.dto";
import { UpdateAvaliacaoDto } from "./dto/update-avaliacao.dto";

import { AvaliacaoRepository } from "./app.repository";
import { EmpresaService } from "./empresa/empresa.service";
import { DocumentoService } from "./documento/documento.service";

import { Empresa } from "./empresa/interfaces/empresa.interface";
import { Documento } from "./documento/interfaces/documento.interface";
// import {AvaliacaoService} from "./documento/avaliacao.service";

@Injectable()
export class AppService {

  constructor(
      private readonly avaliacaoRepository: AvaliacaoRepository,
      private readonly empresaService: EmpresaService,
      private readonly documentoService: DocumentoService,
      // private readonly avaliacaoService: AvaliacaoService
  ) {}

  async findAll(): Promise<Avaliacao[]> {
    return await this.avaliacaoRepository.findAll();
  }

  async create(createAvaliacaoDto: CreateAvaliacaoDto): Promise<Avaliacao | HttpException> {

    try {
      const empresa: Empresa = await this.empresaService.findById(createAvaliacaoDto.empresa._id);
      const documento: Documento = await this.documentoService.findById(createAvaliacaoDto.documento._id)

      if (empresa._id && documento._id) {
        console.log(`Achou os ids: ${empresa._id} : ${documento._id}`)

        return this.avaliacaoRepository.create({
              avaliacaoNome: createAvaliacaoDto.avaliacaoNome,
              documento: createAvaliacaoDto.documento,
              empresa: createAvaliacaoDto.empresa,
            }
        );
      }
    } catch (e) {
      console.log(e)
    }
    return new HttpException('Oh noes, cannot go on with this request.', 400);
  }

  async findOne(id: string): Promise<Avaliacao> {
    return await this.avaliacaoRepository.findOne({ _id: id });
  }

  async findByName(nome: string): Promise<Avaliacao> {
    console.log(`name service: ${nome}`)

    return await this.avaliacaoRepository.findByName( { nome });
  }

  async update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto): Promise<Avaliacao | void> {
    const avaliacao: Avaliacao = await this.avaliacaoRepository.findOne({ _id: id });

    if (avaliacao._id) {
      return await this.avaliacaoRepository.update({ _id: id }, updateAvaliacaoDto)
    }
  }

  // async findByRegistration(id: string): Promise<Atividade> {
  //   const res = Number(id)
  //   return await this.atividadeRepository.findByRegistration(res);
  // }
}
