import { Injectable } from '@nestjs/common';
import { ServicioPrincipalRestService } from '../../clases-genericas/clase-generica-component/servicio-principal-rest.service';
import { SueldoEntity } from './sueldo.entity';
import { Repository } from 'typeorm/index';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SueldoService extends ServicioPrincipalRestService<SueldoEntity> {
  constructor(
    @InjectRepository(SueldoEntity)
    private readonly _sueldoRepository: Repository<SueldoEntity>,
  ) {
    super(_sueldoRepository);
  }
}
