import { Column, Entity, OneToMany } from 'typeorm/index';
import { EntityGenericaEntity } from '../../clases-genericas/clase-generica-entity/entity-generica.entity';
import { RolUsuarioEntity } from '../rol-usuario/rol-usuario.entity';
import { GastoEntity } from '../gasto/gasto.entity';
import { SueldoEntity } from '../sueldo/sueldo.entity';

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
    type: 'varchar',
    length: 60,
    name: 'contrasenia',
    nullable: true,
  })
  contrasenia: string = null;

  @Column({
    type: 'tinyint',
    name: 'estado',
    default: 1,
  })
  estado: 1 | 0 = 1;

  @OneToMany(
    type => RolUsuarioEntity,
    rolUsuario => rolUsuario.usuario,
  )
  rolesUsuario: RolUsuarioEntity[];

  @OneToMany(
    type => GastoEntity,
    gasto => gasto.usuario,
  )
  gastos: GastoEntity[];

  @OneToMany(
    type => SueldoEntity,
    sueldo => sueldo.usuario,
  )
  sueldos: SueldoEntity[];

}
