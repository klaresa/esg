import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET']
  });

  const config = new DocumentBuilder()
      .setTitle('Avaliacao')
      .setDescription('')
      .setVersion('1.0')
      .addTag('avaliacao')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
