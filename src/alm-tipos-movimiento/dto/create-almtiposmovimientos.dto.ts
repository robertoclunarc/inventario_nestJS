import { IsNumber, IsString } from 'class-validator';

export class CreateAlmTiposMovimientoDTO {
    
    @IsString()
    descripcion: string;

    @IsNumber()
    estatus: number;

}