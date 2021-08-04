import { Controller, Get, Post, Delete, Put, Param, Body, /*Req, Res,*/ ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AlmTiposMovimientoService } from './alm-tipos-movimiento.service';
import { CreateAlmTiposMovimientoDTO } from './dto/create-almtiposmovimientos.dto';
import { EditAlmTiposMovimientoDTO } from './dto/edit-AlmTiposMovimiento.dto'

@ApiTags("alm-Tipos-Movimiento Module")
@Controller('api/inventario/tipos')
export class AlmTiposMovimientoController {

    constructor (private readonly srvAlmTiposMovimiento: AlmTiposMovimientoService){

    }    

    @Get()
    async getAll(){
        return await this.srvAlmTiposMovimiento.getAll();
    }

    @Get(':Id')
    async getOne(@Param('Id', ParseIntPipe) IdMovInventario: number){
        return await this.srvAlmTiposMovimiento.getOne(IdMovInventario);
    }

    @Post()
    async createMovInv(@Body() dto: CreateAlmTiposMovimientoDTO) {
        return await this.srvAlmTiposMovimiento.insertar(dto);
        
    }

    @Put(':id')
    async updateMovInv(
            @Body() dto: EditAlmTiposMovimientoDTO, 
            @Param('id', ParseIntPipe) id
        )
        {
            return await this.srvAlmTiposMovimiento.editar(id,dto);
        }

    @Delete(':id')
    deleteMovInv(@Param('id') id){
       
        return this.srvAlmTiposMovimiento.delete(id);
    }
}