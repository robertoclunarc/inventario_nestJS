import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class alm_tipos_movimiento {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    idAlmTipoMov: number;    
    
    @Column({type: 'char', length: 50, nullable: false})
    descripcion: string;

    @Column({type: 'int', nullable: false })
    estatus:number;
}    
