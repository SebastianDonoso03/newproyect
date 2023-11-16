
import { IsOptional, IsString } from "class-validator"

export class CreateTareaDto {
    @IsString()    
    id: number
    @IsString()
    tarea: string
    @IsString()
    descripcion: string
}