import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CONFIGURACION } from '../../../enviroment/config';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../../usuario/usuario.entity';
import { Repository } from 'typeorm/index';
import { JwtPayloadInterface } from '../interface/jwt-payload.interface';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: CONFIGURACION.jwt_secret,
        ignoreExpiration: false,
      },
    );
  }

  async validate(payload: JwtPayloadInterface) {
    try {
      const usuario = await this._usuarioRepository.findOne({
        where: {
          cedula: payload.cedula,
        },
      });
      if (!usuario) {
        throw new UnauthorizedException({ mensaje: 'No tiene permisos' });
      }
      return usuario;
    } catch (e) {
      console.error({
        mensaje: 'Error en validate de usuarios',
        error: e,
      });
      throw new BadRequestException({
        mensaje: 'Error con parametros de payload',
      });
    }
  }
}
