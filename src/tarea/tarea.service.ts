import { Body, Get, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Task } from 'src/tarea/tarea.interface'
import { v4 as uuid } from 'uuid';

@Injectable()
export class TareaService {
    
    private task:Task[] =[
        {id: uuid(), tarea:"Matematica", descripcion:"sumas"},
        {id: uuid(), tarea:"Lenguaje", descripcion:"platilla"},
        {id: uuid(), tarea:"Ciencias", descripcion:"plantas"},
    ]

    
    Getall() {
        return this.task;
    }

    one(id) {
        const res = this.task.find(objeto => objeto.id === id);
        if (!res){
            throw new NotFoundException("No existe");
        }else{
            return res
        }
    }
    
    createTask(@Body() task:any){
        return task
}


    findByLetra(letra: string): Task[] {
        return this.task.filter(tare => tare.tarea.startsWith(letra.toUpperCase()));
  }

}

