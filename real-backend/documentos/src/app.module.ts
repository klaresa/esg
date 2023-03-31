import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { Documento, DocumentoSchema } from './schemas/documento.schema';
import { DocumentoRepository} from "./app.repository";

@Module({
  imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGO_STRING),
      MongooseModule.forFeature([{
          name: Documento.name,
          schema: DocumentoSchema,
          collection: 'documentos'
        }]),
  ],
  controllers: [AppController],
  providers: [AppService, DocumentoRepository],
})
export class AppModule {}
