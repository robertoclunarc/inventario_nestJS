import { movInventarioEstatus } from '../enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateAlmMovInventarioDTO {
    @ApiProperty()
    @IsNumber()    
    tipo: number;

    @ApiProperty()
    @IsNumber()
    id_producto: number;

    @ApiProperty()
    @IsNumber()
    entrada: number;

    @ApiProperty()
    @IsNumber()
    salida: number;

    @ApiProperty()
    @IsNumber()
    id_almacen_origen: number;

    @ApiProperty()
    @IsNumber()
    id_almacen_destino: number;

    @ApiProperty()
    @IsNumber()
    id_usuario_proceso: number;

    @ApiProperty()
    @IsNumber()
    id_usuario_aprobo: number;

    @ApiProperty()
    @IsString()
    fecha_solicitud: string;

    @ApiProperty()
    @IsString()
    fecha_aprobacion: string;
    
    @ApiProperty()
    @IsNumber()
    id_activo: number;

    @ApiProperty()
    @IsNumber()
    es_logico: number;

    @ApiProperty()
    @IsNumber()
    costo: number;

    @ApiProperty()
    @IsNumber()
    costo_Dollar: number;

    @ApiProperty()
    @IsNumber()
    id_puesto: number;
    
    @ApiProperty()
    @IsNumber()
    id_oc: number;

    @ApiProperty()
    @IsString()
    lote: string;

    @ApiProperty()
    @IsString()
    justificacion: string;

    @ApiProperty()
    @IsString()
    rif_empresa: string;

    @ApiProperty()
    @IsString()
    fecha_caducidad: string;

    @ApiProperty()
    @IsEnum(movInventarioEstatus,{
        message: `La opcion recibida no esta dentro de las opciones validas del campo Estatus`})
    estatus: movInventarioEstatus;
}