import { Injectable } from '@nestjs/common';
import { ServicioPrincipalRestService } from '../../clases-genericas/clase-generica-component/servicio-principal-rest.service';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm/index';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService extends ServicioPrincipalRestService<UsuarioEntity> {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ) {
    super(
      _usuarioRepository,
    );
  }
}
