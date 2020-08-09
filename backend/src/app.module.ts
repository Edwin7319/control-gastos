import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ARREGLO_MODULOS } from './constantes/arreglo-modulos';
import { CONFIGURACION } from './enviroment/config';
import { ARREGLO_ENTIDADES } from './constantes/arreglo-entidades';

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
      entities: [
        ...ARREGLO_ENTIDADES
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
