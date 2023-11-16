import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Carro2Module } from './carro2/carro2.module';
import { TareaService } from './tarea/tarea.service';
import { TareaController } from './tarea/tarea.controller';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [Carro2Module, MarcasModule],
  controllers: [AppController, TareaController],
  providers: [AppService, TareaService],
})
export class AppModule {}
