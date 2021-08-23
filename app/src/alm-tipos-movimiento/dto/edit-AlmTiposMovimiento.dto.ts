import { CreateAlmTiposMovimientoDTO } from './create-almtiposmovimientos.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditAlmTiposMovimientoDTO extends PartialType(CreateAlmTiposMovimientoDTO) {}