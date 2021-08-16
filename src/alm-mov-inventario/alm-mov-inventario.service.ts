import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlmMovInventarioDTO } from './dto/create-AlmMovInventario.dto';
import { EditAlmMovInventarioDTO } from './dto/edit-AlmMovInventario.dto';
import { alm_mov_inventario } from './entities/alm_mov_inventario.entity';

@Injectable()
export class AlmMovInventarioService {

    constructor(
        @InjectRepository(alm_mov_inventario)
        private readonly rpsAlmInventario: Repository<alm_mov_inventario>
    ){}

    entidad: string = "Alm-Mov-Inventario";
    
    async getAll(): Promise<alm_mov_inventario[]> {
        
        return await this.rpsAlmInventario.find();
    }

    async getOne(id: number){
        return await this.rpsAlmInventario.findOne(id)
    }

    async getIdOc(idOc: number): Promise<alm_mov_inventario[]> {
        
        return await this.rpsAlmInventario.find({id_oc: idOc});
    }

    async getProductos(idProd: number): Promise<alm_mov_inventario[]> {
        
        return await this.rpsAlmInventario.find({id_producto: idProd});
    }

    async insertar(dto: CreateAlmMovInventarioDTO){
        const post = this.rpsAlmInventario.create(dto as any);
        return await this.rpsAlmInventario.save(post);
    }

    async editar(id: number, dto: EditAlmMovInventarioDTO){
        const post = await this.rpsAlmInventario.findOne(id);
        if (!post){
            return `${this.entidad} No Actualizado`
        }
        const editPost = Object.assign(post, dto);
        return await this.rpsAlmInventario.save(editPost);
        //return `${this.entidad} Actualizado Correctamente`            
    }

    async delete(id: number){
        return await this.rpsAlmInventario.delete(id);
    }
}
