import { RolModule } from '../modulos/rol/rol.module';
import { RolUsuarioModule } from '../modulos/rol-usuario/rol-usuario.module';
import { UsuarioModule } from '../modulos/usuario/usuario.module';
import { SueldoModule } from '../modulos/sueldo/sueldo.module';
import { GastoModule } from '../modulos/gasto/gasto.module';

export const ARREGLO_MODULOS = [
  RolModule,
  RolUsuarioModule,
  UsuarioModule,
  SueldoModule,
  GastoModule,
];
