import { Injectable } from '@nestjs/common';
import { ServicioPrincipalRestService } from '../../clases-genericas/clase-generica-component/servicio-principal-rest.service';
import { RolEntity } from './rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

@Injectable()
export class RolService extends ServicioPrincipalRestService<RolEntity> {
  constructor(
    @InjectRepository(RolEntity)
    private readonly _rolRepository: Repository<RolEntity>,
  ) {
    super(_rolRepository);
  }
}
