import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { JwtStrategyService } from './estrategia/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { CONFIGURACION } from '../../enviroment/config';
import { RolEntity } from '../rol/rol.entity';
import { RolUsuarioEntity } from '../rol-usuario/rol-usuario.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        RolEntity,
        RolUsuarioEntity,
        UsuarioEntity,
      ], 'default',
    ),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: CONFIGURACION.jwt_secret,
      signOptions: {
        expiresIn: '3600s',
      },

    }),
  ],
  providers: [
    AuthService,
    JwtStrategyService
  ],
  controllers: [
    AuthController,
  ],
  exports: [
    AuthService,
    JwtStrategyService,
    PassportModule,
  ],
})
export class AuthModule {
}
