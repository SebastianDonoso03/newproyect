import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarroServices {
    grupo = [
        { id: 1, nombre: "Mazda" },
        { id: 2, nombre: "Toyota" },
        { id: 3, nombre: "BMW" }
    ];

    hol(id) {
        const res = this.grupo.find(objeto => objeto.id === parseInt(id));
        if (!res) {
            throw new NotFoundException("No existe");
        } else {
            return res;
        }
    }

    all_items() {
        return this.grupo;
    }

    createItem(newItem: { id: number, nombre: string }) {
        this.grupo.push(newItem);
        return newItem;
    }

    searchItems(nombre: string) {
        return this.grupo.filter(objeto => objeto.nombre.includes(nombre));
    }
}
