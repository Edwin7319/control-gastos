import { Column, Entity } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';

@Entity('sueldo')
export class SueldoEntity extends EntityGenericaEntity {

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    name: 'descripcion',
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
    name: 'fecha_inicio',
    nullable: false,
  })
  fechaInicio: string;

  @Column({
    type: 'date',
    name: 'fecha_fin',
    nullable: false,
  })
  fechaFin: string;

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

}
