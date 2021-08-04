import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlmTiposMovimientoDTO } from './dto/create-almtiposmovimientos.dto';
import { EditAlmTiposMovimientoDTO } from './dto/edit-AlmTiposMovimiento.dto';
import { alm_tipos_movimiento } from './entities/alm_tipos_movimientos.entity';

@Injectable()
export class AlmTiposMovimientoService {

    constructor(
        @InjectRepository(alm_tipos_movimiento)
        private readonly rpsAlmTiposMov: Repository<alm_tipos_movimiento>
    ){}

    entidad: string = "Alm-Tipos-Movimiento";
    
    async getAll(): Promise<alm_tipos_movimiento[]> {
        
        return await this.rpsAlmTiposMov.find();
    }

    async getOne(id: number){
        return await this.rpsAlmTiposMov.findOne(id)
    }

    async insertar(dto: CreateAlmTiposMovimientoDTO){
        const post = this.rpsAlmTiposMov.create(dto as any);
        return await this.rpsAlmTiposMov.save(post);
    }

    async editar(id: number, dto: EditAlmTiposMovimientoDTO){
        const post = await this.rpsAlmTiposMov.findOne(id);
        if (!post){
            return `${this.entidad} No Actualizado`
        }
        const editPost = Object.assign(post, dto);
        await this.rpsAlmTiposMov.save(editPost);
        return `${this.entidad} Actualizado Correctamente`            
    }

    async delete(id: number){
        return await this.rpsAlmTiposMov.delete(id);
    }
}