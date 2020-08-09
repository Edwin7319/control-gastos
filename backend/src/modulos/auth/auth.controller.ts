import { BadRequestException, Body, Controller, Post, UnauthorizedException, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CrearUsuarioDto } from '../usuario/crear-usuario-dto/crear-usuario-dto';
import { validate } from 'class-validator';
import { SigInDto } from './auth-dto/sig-in-dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly _authService: AuthService,
  ) {
  }

  @Post('registrar')
  async registrarUsuario(
    @Body() datos: UsuarioEntity,
  ) {
    const nuevoUsuario = new CrearUsuarioDto(datos);
    const errores = await validate(nuevoUsuario);
    const existeErrores = errores.length > 0;
    if (!existeErrores) {
      try {
        return await this._authService.crear(datos);
      } catch (e) {
        console.error({
          mensaje: 'Error registrando',
          error: e,
          datos,
        });
      }
    } else {
      console.error({
        mensaje: 'Error parametros',
        errores,
        datos,
      });
      throw new BadRequestException({
        mensaje: 'Error con parametros enviados',
      });
    }
  }

  @Post('logear')
  async logearUsuarioEnElSistema(
    @Body() credenciales: SigInDto,
  ) {
    const sigIn = new SigInDto();
    sigIn.cedula = credenciales.cedula;
    sigIn.contrasenia = credenciales.contrasenia;
    const errores = await validate(sigIn);
    const existeErrores = errores.length > 0;
    if (!existeErrores) {
      try {
        return await this._authService.logearUsuarioEnElSistema(credenciales);
      } catch (e) {
        console.error({
          mensaje: 'Error al logearse el sistema',
          error: e,
          datos: credenciales,
        });
      }
    } else {
      console.error({
        mensaje: 'errores en credenciales',
        errores,
      });
      throw new BadRequestException({
        mensaje: 'Error en credenciales',
      });
    }
  }

}
