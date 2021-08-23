import { movInventarioEstatus } from '../enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAlmMovInventarioDTO {
    @ApiProperty()
    @IsNumber()
    @IsOptional()//--------
    alma_mov_inv_id: number; 

    @IsNumber()
    @IsOptional()//--------   
    tipo: number;

    
    @IsNumber()
    @IsOptional()//--------
    @Type(() => Number)
    id_producto: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    entrada: number;

   
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    salida: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id_almacen_origen: number;

   
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id_almacen_destino: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id_usuario_proceso: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id_usuario_aprobo: number;

    
    @IsString()
    fecha_solicitud: string;

    
    @IsString()
    @IsOptional()
    fecha_aprobacion: string;
    
    
    @IsNumber()
    @IsOptional()//--------
    @Type(() => Number)
    id_activo: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    es_logico: number;

    
    @IsNumber()
    @Type(() => Number)
    costo: number;

    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    costo_Dollar: number;

    
    @IsNumber()
    @IsOptional()//--------
    @Type(() => Number)
    id_puesto: number;
    
   
    @IsNumber()
    @Type(() => Number)
    id_oc: number;

    
    @IsString()
    @IsOptional()
    lote: string;

    
    @IsString()
    @IsOptional()
    justificacion: string;

    
    @IsString()
    @IsOptional()//--------
    rif_empresa: string;

    
    @IsString()
    @IsOptional()//--------
    fecha_caducidad: string;

    
    @IsEnum(movInventarioEstatus,{
        message: `La opcion recibida no esta dentro de las opciones validas del campo Estatus`})
    estatus: movInventarioEstatus;
}