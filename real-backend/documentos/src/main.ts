import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET']
  });

  app.use(session({
    secret: process.env.SESS,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
  }));

  const config = new DocumentBuilder()
      .setTitle('Documentos')
      .setDescription('')
      .setVersion('1.0')
      .addTag('documentos')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
