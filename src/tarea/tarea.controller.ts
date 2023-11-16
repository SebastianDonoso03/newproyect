import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from './dto/create-tarea.dto';


@Controller('tarea')
export class TareaController {
    constructor(public tareaServices:TareaService) {}

@Get()
Get_tarea(){
    return this.tareaServices.Getall()
}

@Get(':id')
one(@Param('id',ParseIntPipe) dato: number){
    return this.tareaServices.one(dato)
}

@Post()

newTask(@Body() datos:CreateTareaDto){
    return datos

}
    
@Get('/letra/:letra')
  getPersonasByLetra(@Param('letra') letra: string) {
    const materia = this.tareaServices.findByLetra(letra);
    return { materia };

}
}
