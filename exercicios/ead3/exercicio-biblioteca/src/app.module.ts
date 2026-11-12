import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { opcoesBanco } from './banco';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [TypeOrmModule.forRoot(opcoesBanco), LivrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
