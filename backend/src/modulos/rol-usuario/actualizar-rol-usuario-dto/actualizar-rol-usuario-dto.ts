import { IsInt, IsOptional } from 'class-validator';
import { RolUsuarioEntity } from '../rol-usuario.entity';

export class ActualizarRolUsuarioDto {

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  constructor(rolUsuario: RolUsuarioEntity) {
  }

}
