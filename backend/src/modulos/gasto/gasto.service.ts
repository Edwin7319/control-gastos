import { Injectable } from '@nestjs/common';
import { ServicioPrincipalRestService } from '../../clases-genericas/clase-generica-component/servicio-principal-rest.service';
import { GastoEntity } from './gasto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

@Injectable()
export class GastoService extends ServicioPrincipalRestService<GastoEntity> {
  constructor(
    @InjectRepository(GastoEntity)
    private readonly _gastoRepository: Repository<GastoEntity>,
  ) {
    super(
      _gastoRepository,
    );
  }
}
