import { InternalServerErrorException, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ARREGLO_MODULOS } from './constantes/arreglo-modulos';
import { CONFIGURACION } from './enviroment/config';
import { ARREGLO_ENTIDADES } from './constantes/arreglo-entidades';
import { AuthService } from './modulos/auth/auth.service';
import { RolService } from './modulos/rol/rol.service';
import { UsuarioService } from './modulos/usuario/usuario.service';
import { RolUsuarioService } from './modulos/rol-usuario/rol-usuario.service';
import { SueldoService } from './modulos/sueldo/sueldo.service';
import { GastoService } from './modulos/gasto/gasto.service';
import { cargarDatos } from './funciones/cargar-datos';

@Module({
  imports: [
    ...ARREGLO_MODULOS,
    TypeOrmModule.forRoot({
      type: 'mysql',
      connectTimeout: 20000,
      host: CONFIGURACION.bdd.host,
      port: CONFIGURACION.bdd.port,
      username: CONFIGURACION.bdd.username,
      password: CONFIGURACION.bdd.password,
      database: CONFIGURACION.bdd.database,
      synchronize: CONFIGURACION.bdd.synchronize,
      dropSchema: CONFIGURACION.bdd.dropSchema,
      name: CONFIGURACION.bdd.name,
      charset: CONFIGURACION.bdd.charset,
      timezone: CONFIGURACION.bdd.timezone,
      entities: [
        ...ARREGLO_ENTIDADES,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(
    private readonly _authService: AuthService,
    private readonly _rolService: RolService,
    private readonly _usuarioService: UsuarioService,
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _sueldoService: SueldoService,
    private readonly _gastoService: GastoService,
  ) {
    CONFIGURACION.crearDatosDePrueba ? this.crearDatosDePrueba() : console.log({ mensaje: 'No se creo datos de prueba' });
  }

  async crearDatosDePrueba() {
    try {
      const rolCreado = await cargarDatos('src/datos-de-prueba/datos-rol.json', this._rolService);
      // console.log('rolCreado');

      const usuarioAuthCreado = await cargarDatos('src/datos-de-prueba/datos-usuario-auth.json', this._authService);
      // console.log('usuarioAuthCreado');

      const usuarioCreado = await cargarDatos('src/datos-de-prueba/datos-usuario.json', this._usuarioService);
      // console.log('usuarioCreado');

      const rolUsuarioCreado = await cargarDatos('src/datos-de-prueba/datos-rol-usuario.json', this._rolUsuarioService);
      // console.log('rolUsuarioCreado');

      console.log({
        mensaje: 'Termino de crear datos de prueba',
      });
    } catch (e) {
      console.error({
        mensaje: 'error al crear datos de prueba',
        error: e,
      });
      throw new InternalServerErrorException({
        mensaje: 'Error creado datos de prueba',
      });
    }
  }
}
