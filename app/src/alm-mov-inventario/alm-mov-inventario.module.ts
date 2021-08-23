import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmMovInventarioController } from './alm-mov-inventario.controller';
import { AlmMovInventarioService } from './alm-mov-inventario.service';
import { alm_mov_inventario } from './entities/alm_mov_inventario.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([alm_mov_inventario])
    ],
    controllers:[AlmMovInventarioController],
    providers:[AlmMovInventarioService]
})
export class AlmMovInventarioModule {}