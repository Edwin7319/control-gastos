import { Column, Entity } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';

@Entity('usuario')
export class UsuarioEntity extends EntityGenericaEntity {

  @Column({
    type: 'varchar',
    length: 120,
    name: 'nombres',
    nullable: false,
  })
  nombres: string;

  @Column({
    type: 'varchar',
    length: 120,
    name: 'apellidos',
    nullable: false,
  })
  apellidos: string;

  @Column({
    type: 'varchar',
    length: 11,
    name: 'cedula',
    nullable: false,
  })
  cedula: string;

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

}
