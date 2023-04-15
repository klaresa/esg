import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { Avaliacao, AvaliacaoSchema } from './schemas/avaliacao.schema';
import { AvaliacaoRepository } from "./app.repository";
import { EmpresaService } from "./empresa/empresa.service";
import { DocumentoService } from "./documento/documento.service";
// import {AvaliacaoService} from "./documento/avaliacao.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_STRING),
    MongooseModule.forFeature([{
      name: Avaliacao.name,
      schema: AvaliacaoSchema,
      collection: 'avaliacao'
    }]),
  ],
  controllers: [AppController],
  providers: [AppService, AvaliacaoRepository, EmpresaService, DocumentoService],
})
export class AppModule {}
