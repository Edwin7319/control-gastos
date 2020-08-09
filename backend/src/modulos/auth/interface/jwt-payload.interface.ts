import { RolUsuarioEntity } from '../../rol-usuario/rol-usuario.entity';

export interface JwtPayloadInterface {
  cedula: string;
  nombres: string;
  apellidos: string;
  roles: RolUsuarioEntity[],
  expiracion?: Date
}
