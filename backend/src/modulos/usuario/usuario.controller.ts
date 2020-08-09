import { Controller } from '@nestjs/common';
import { ControladorPrincipalController } from '../../clases-genericas/clase-generica-component/controlador-principal.controller';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { CrearUsuarioDto } from './crear-usuario-dto/crear-usuario-dto';
import { ActualizarUsuarioDto } from './actualizar-usuario-dto/actualizar-usuario-dto';

@Controller('usuario')
export class UsuarioController extends ControladorPrincipalController<UsuarioEntity> {
  constructor(
    private readonly _usuarioService: UsuarioService,
  ) {
    super(
      _usuarioService,
      CrearUsuarioDto,
      ActualizarUsuarioDto,
    );
  }
}
