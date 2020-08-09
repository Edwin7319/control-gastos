import { Injectable } from '@nestjs/common';
import { ServicioPrincipalRestService } from '../../clases-genericas/clase-generica-component/servicio-principal-rest.service';
import { RolUsuarioEntity } from './rol-usuario.entity';
import { Repository } from 'typeorm/index';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolUsuarioService extends ServicioPrincipalRestService<RolUsuarioEntity> {
  constructor(
    @InjectRepository(RolUsuarioEntity)
    private readonly _rolUsuarioRepository: Repository<RolUsuarioEntity>,
  ) {
    super(_rolUsuarioRepository);
  }
}
