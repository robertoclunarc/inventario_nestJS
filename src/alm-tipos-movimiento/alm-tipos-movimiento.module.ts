import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmTiposMovimientoController } from './alm-tipos-movimiento.controller';
import { AlmTiposMovimientoService } from './alm-tipos-movimiento.service';
import { alm_tipos_movimiento } from './entities/alm_tipos_movimientos.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([alm_tipos_movimiento])
    ],
    controllers:[AlmTiposMovimientoController],
    providers:[AlmTiposMovimientoService]
})
export class AlmTiposMovimientoModule {}