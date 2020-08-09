import { Controller } from '@nestjs/common';
import { ControladorPrincipalController } from '../../clases-genericas/clase-generica-component/controlador-principal.controller';
import { GastoEntity } from './gasto.entity';
import { GastoService } from './gasto.service';
import { CrearGastoDto } from './crear-gasto-dto/crear-gasto-dto';
import { ActualizarGastoDto } from './actualizar-gasto-dto/actualizar-gasto-dto';

@Controller('gasto')
export class GastoController extends ControladorPrincipalController<GastoEntity> {
  constructor(
    private readonly _gastoService: GastoService,
  ) {
    super(
      _gastoService,
      CrearGastoDto,
      ActualizarGastoDto,
    );
  }
}
