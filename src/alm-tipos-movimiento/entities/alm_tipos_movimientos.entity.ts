import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class alm_tipos_movimiento {
    @PrimaryGeneratedColumn()
    idAlmTipoMov: number;    
    
    @Column({type: 'char', length: 50, nullable: false})
    descripcion: string;

    @Column({type: 'int', nullable: false })
    estatus:number;
}    
