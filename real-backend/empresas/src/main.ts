import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET']
  });

  app.use(session({
    secret: process.env.SESS,
    resave: false,
    saveUnitialized: false,
    cookie: { maxAge: 3600000 }
  }));

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(passport.initialize());
  app.use(passport.session())

  const config = new DocumentBuilder()
      .setTitle('empresas')
      .setDescription('Descricao da API de empresas')
      .setVersion('1.0')
      .addTag('empresas')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
