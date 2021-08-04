import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class alm_mov_inventario {
    @PrimaryGeneratedColumn()
    alma_mov_inv_id: number; 

    @Column({type: 'int', nullable: true })
    tipo: number;
    
    @Column({type: 'int' })
    id_producto: number;
    
    @Column({type: 'float', nullable: true })
    entrada: number;

    @Column({type: 'float', nullable: true })
    salida: number;

    @Column({type: 'int', nullable: true })
    id_almacen_origen: number;

    @Column({type: 'int', nullable: true })
    id_almacen_destino: number;

    @Column({type: 'int', nullable: true })
    id_usuario_proceso: number; 

    @Column({type: 'int', nullable: true })
    id_usuario_aprobo: number;

    @CreateDateColumn({type: 'datetime' })
    fecha_solicitud: Date;
    
    @Column({type: 'datetime', nullable: true })
    fecha_aprobacion: Date;    
    
    @Column({type: 'int', nullable: true })
    id_activo: number;
    
    @Column({type: 'int', nullable: true })
    es_logico: number;
    
    @Column({type: 'float', nullable: true })
    costo: number;
    
    @Column({type: 'float', nullable: true })
    costo_Dollar: number;
    
    @Column({type: 'int', nullable: true })
    id_puesto:number;
    
    @Column({type: 'int' })
    id_oc: number;
    
    @Column({type: 'char', nullable: true, length: 50})
    lote: string;
    
    @Column({type: 'char', length: 200, nullable: true})
    justificacion: string
    
    @Column({type: 'char', length: 20, nullable: true})
    rif_empresa: string;
    
    @Column({type: 'timestamp', nullable: true })
    fecha_caducidad: Date;
    
    @Column({type: 'char', length: 20, nullable: true})
    estatus: string;  
}    
