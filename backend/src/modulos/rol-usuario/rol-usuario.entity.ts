import { Column, Entity } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';

@Entity('rol_usuario')
export class RolUsuarioEntity extends EntityGenericaEntity {

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

}
