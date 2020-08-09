import { Controller } from '@nestjs/common';
import { ControladorPrincipalController } from '../../clases-genericas/clase-generica-component/controlador-principal.controller';
import { SueldoEntity } from './sueldo.entity';
import { SueldoService } from './sueldo.service';
import { CrearSueldoDto } from './crear-sueldo-dto/crear-sueldo-dto';
import { ActualizarSueldoDto } from './actualizar-sueldo-dto/actualizar-sueldo-dto';

@Controller('sueldo')
export class SueldoController extends ControladorPrincipalController<SueldoEntity> {
  constructor(
    private readonly _sueldoService: SueldoService,
  ) {
    super(
      _sueldoService,
      CrearSueldoDto,
      ActualizarSueldoDto,
    );
  }
}
