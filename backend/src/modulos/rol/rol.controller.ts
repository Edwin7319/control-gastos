import { Controller } from '@nestjs/common';
import { ControladorPrincipalController } from '../../clases-genericas/clase-generica-component/controlador-principal.controller';
import { RolEntity } from './rol.entity';
import { RolService } from './rol.service';
import { CrearRolDto } from './crear-rol-dto/crear-rol-dto';
import { ActualizarRolDto } from './actualizar-rol-dto/actualizar-rol-dto';

@Controller('rol')
export class RolController extends ControladorPrincipalController<RolEntity> {
  constructor(
    private readonly _rolService: RolService,
  ) {
    super(
      _rolService,
      CrearRolDto,
      ActualizarRolDto,
    );
  }
}
