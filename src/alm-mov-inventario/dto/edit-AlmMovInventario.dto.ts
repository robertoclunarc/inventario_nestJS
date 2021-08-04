import { CreateAlmMovInventarioDTO } from './create-AlmMovInventario.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditAlmMovInventarioDTO extends PartialType(CreateAlmMovInventarioDTO ) {} 
