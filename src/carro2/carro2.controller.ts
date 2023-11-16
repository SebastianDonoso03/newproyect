import { Controller, Get, Param, ParseIntPipe, Post, Body, Query } from '@nestjs/common';
import { CarroServices } from './carro2.service';

@Controller('marcas')
export class CarroController {
    constructor(public car: CarroServices) {}

    @Get()
    trs() {
        return this.car.all_items();
    }

    @Get(':id')
    dos(@Param('id', ParseIntPipe) dato: string) {
        return this.car.hol(dato);
    }

    @Post()
    create(@Body() newItem: { id: number, nombre: string }) {
        return this.car.createItem(newItem);
    }

    @Get('search')
    search(@Query('nombre') nombre: string) {
        return this.car.searchItems(nombre);
    }
}