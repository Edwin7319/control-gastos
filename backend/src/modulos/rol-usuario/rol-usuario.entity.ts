import { Column, Entity, ManyToOne } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';
import { RolEntity } from '../rol/rol.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity('rol_usuario')
export class RolUsuarioEntity extends EntityGenericaEntity {

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

  @ManyToOne(
    type => RolEntity,
    rol => rol.rolesUsuario,
  )
  rol: number | RolEntity;

  @ManyToOne(
    type => UsuarioEntity,
    usuario => usuario.rolesUsuario,
  )
  usuario: number | UsuarioEntity;

}
