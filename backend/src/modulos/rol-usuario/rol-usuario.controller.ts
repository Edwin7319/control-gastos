import { Controller } from '@nestjs/common';
import { ControladorPrincipalController } from '../../clases-genericas/clase-generica-component/controlador-principal.controller';
import { RolUsuarioEntity } from './rol-usuario.entity';
import { RolUsuarioService } from './rol-usuario.service';
import { CrearRolUsuarioDto } from './crear-rol-usuario-dto/crear-rol-usuario-dto';
import { ActualizarRolUsuarioDto } from './actualizar-rol-usuario-dto/actualizar-rol-usuario-dto';

@Controller('rol-usuario')
export class RolUsuarioController extends ControladorPrincipalController<RolUsuarioEntity> {
  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
  ) {
    super(
      _rolUsuarioService,
      CrearRolUsuarioDto,
      ActualizarRolUsuarioDto,
    );
  }
}
