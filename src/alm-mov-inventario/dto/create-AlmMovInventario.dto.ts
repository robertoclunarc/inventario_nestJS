import { movInventarioEstatus } from '../enums';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateAlmMovInventarioDTO {
    //alma_mov_inv_id?: number;
    @IsNumber()    
    tipo: number;

    @IsNumber()
    id_producto: number;

    @IsNumber()
    entrada: number;

    @IsNumber()
    salida: number;

    @IsNumber()
    id_almacen_origen: number;

    @IsNumber()
    id_almacen_destino: number;

    @IsNumber()
    id_usuario_proceso: number;

    @IsNumber()
    id_usuario_aprobo: number;

    @IsString()
    fecha_solicitud: string;

    @IsString()
    fecha_aprobacion: string;
    
    @IsNumber()
    id_activo: number;

    @IsNumber()
    es_logico: number;

    @IsNumber()
    costo: number;

    @IsNumber()
    costo_Dollar: number;

    @IsNumber()
    id_puesto: number;
    
    @IsNumber()
    id_oc: number;

    @IsString()
    lote: string;

    @IsString()
    justificacion: string;

    @IsString()
    rif_empresa: string;

    @IsString()
    fecha_caducidad: string;

    @IsEnum(movInventarioEstatus,{
        message: `La opcion recibida no esta dentro de las opciones validas del campo Estatus`})
    estatus: movInventarioEstatus;
}