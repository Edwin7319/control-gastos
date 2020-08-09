import { Column, Entity } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';

@Entity('gasto')
export class GastoEntity extends EntityGenericaEntity {

  @Column({
    type: 'varchar',
    length: 120,
    name: 'nombre',
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'descripcion',
    nullable: true,
  })
  descripcion: string = null;

  @Column({
    type: 'decimal',
    name: 'cantidad',
    nullable: false,
    precision: 8,
    scale: 2,
  })
  cantidad: string;

  @Column({
    type: 'date',
    name: 'fecha',
  })
  fecha: string;

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

}
