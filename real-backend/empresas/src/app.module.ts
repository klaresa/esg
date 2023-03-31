import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresasModule } from './empresas/empresas.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGO_STRING),
      EmpresasModule,
      AuthModule,
      UsersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
