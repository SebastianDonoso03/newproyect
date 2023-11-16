import { Module } from '@nestjs/common';
import { CarroController } from './carro2.controller';
import { CarroServices } from './carro2.service';

@Module({
  controllers: [CarroController],
  providers: [CarroServices]
})
export class Carro2Module {}
