import { Controller, Get, Post, Delete, Put, Param, Body, /*Req, Res,*/ ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AlmMovInventarioService } from './alm-mov-inventario.service';
import { CreateAlmMovInventarioDTO } from './dto/create-AlmMovInventario.dto';
import { EditAlmMovInventarioDTO } from './dto/edit-AlmMovInventario.dto';


@ApiTags("alm-mov-inventario Module")
@Controller('api/inventario/movimientos')
export class AlmMovInventarioController {

    constructor (private readonly srvAlmMovInventario: AlmMovInventarioService){

    }    

    @Get()
    async getAll(){
        return await this.srvAlmMovInventario.getAll();
    }

    @Get(':Id')
    async getOne(@Param('Id', ParseIntPipe) IdMovInventario: number){
        return await this.srvAlmMovInventario.getOne(IdMovInventario);
    }

    @Get('/idoc/:IdOc')
    async getIdOC(@Param('IdOc', ParseIntPipe) IdOc: number){
        return await this.srvAlmMovInventario.getIdOc(IdOc);
    }

    @Get('/productos/:IdProd')
    async getProductos(@Param('IdProd', ParseIntPipe) IdProd: number){
        return await this.srvAlmMovInventario.getProductos(IdProd);
    }

    @Post()
    async createMovInv(
        @Body() dto: CreateAlmMovInventarioDTO
        ) 
        {
        return await this.srvAlmMovInventario.insertar(dto);
        
    }

    @Put(':id')
    async updateMovInv(
            @Body() dto: EditAlmMovInventarioDTO, 
            @Param('id', ParseIntPipe) id
        )
        {
            return await this.srvAlmMovInventario.editar(id,dto);
        }

    @Delete(':id')
    deleteMovInv(@Param('id') id){
       
        return this.srvAlmMovInventario.delete(id);
    }
}