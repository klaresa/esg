import {HttpException, Injectable} from '@nestjs/common';

// import { Avaliacao } from "./entities/avaliacao.entity";
// import { CreateAvaliacaoDto } from "./dto/create-avaliacao.dto";
// import { UpdateAvaliacaoDto } from "./dto/update-avaliacao.dto";
//
// import { AvaliacaoRepository } from "./app.repository";
// import { EmpresaService } from "./empresa/empresa.service";
// import { DocumentoService } from "./documento/documento.service";
//
// import { Empresa } from "./empresa/interfaces/empresa.interface";
import {Documento} from "./interfaces/documento.interface";

interface QuestionsInt {
  question: string
  answer: string
}

@Injectable()
export class AvaliacaoService {

  constructor(
  ) {}


  async create(documento: Documento): Promise<Documento> {
    try {
      // const { _id, name, description, content } = documento;

      // let parsed = documento.content.map(item => {
      //   item.content.filter(el => {
      //     if (el.content.answer === 'sim') {
      //       return el.answer = true
      //     } else if (el.answer === 'nao') {
      //       return el.answer = false
      //     } else {
      //       return el.answer;
      //     }
      //   })
      //
      //   return {
      //     _id,
      //     name,
      //     description,
      //     content: parsed,
      //   }
      // })
      //
      return;
    } catch (e) {
      console.log(e)
    }
  }
}
