import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { Repository } from 'typeorm/index';
import { compare, genSalt, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SigInDto } from './auth-dto/sig-in-dto';
import { JwtPayloadInterface } from './interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
    private readonly _jwtService: JwtService,
  ) {
  }

  async crear(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    const existeUsuario = await this._usuarioRepository.findOne({
      where: {
        cedula: usuario.cedula,
      },
    });
    if (!existeUsuario) {
      try {
        const salt = await genSalt(10);
        usuario.contrasenia = await hash(usuario.contrasenia, salt);
        return await this._usuarioRepository.save(usuario);
      } catch (e) {
        console.error({
          mensaje: 'Error registrando',
          error: e,
          datos: usuario,
        });
        throw new InternalServerErrorException({
          mensaje: 'Error con el servidor al registrar usuario',
        });
      }
    } else {
      throw new ConflictException({
        mensaje: 'El numero de cedula ya se encuentra registrado',
      });
    }
  }

  async logearUsuarioEnElSistema(sigIn: SigInDto): Promise<{ token: string }> {
    try {
      const usuario = await this._usuarioRepository
        .createQueryBuilder('usuario')
        .innerJoinAndSelect('usuario.rolesUsuario', 'rolUsuario', 'rolUsuario.usuario = usuario.id')
        .innerJoinAndSelect('rolUsuario.rol', 'rol', 'rolUsuario.rol = rol.id')
        .where('usuario.cedula =:cedulaU', { cedulaU: sigIn.cedula })
        .getOne();

      if (!usuario) {
        throw new NotFoundException({
          mensaje: 'Usuario no se encuentra registrado',
        });
      }

      const coincideContrasenia = await compare(sigIn.contrasenia, usuario.contrasenia);

      if (!coincideContrasenia) {
        throw new UnauthorizedException({
          mensaje: 'Credenciales no validas',
        });
      }

      const payload: JwtPayloadInterface = {
        cedula: usuario.cedula,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        roles: usuario.rolesUsuario,
      };

      const token = await this._jwtService.sign(payload);
      return { token };
    } catch (e) {
      console.error({
        mensaje: 'Error logeando usuario',
        error: e,
        datos: sigIn,
      });
    }
  }
}
