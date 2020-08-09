import { Column, Entity } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';

@Entity('rol')
export class RolEntity extends EntityGenericaEntity {

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
    name: 'nombre',
  })
  nombre: string = null;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'descripcion',
    nullable: true,
  })
  descripcion: string = null;

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

}
