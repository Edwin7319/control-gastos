import { IsInt, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioEntity } from '../usuario.entity';

export class ActualizarUsuarioDto {
  @IsOptional()
  @IsString()
  @Length(3, 120)
  nombres: string;

  @IsOptional()
  @IsString()
  @Length(3, 120)
  apellidos: string;

  @IsOptional()
  @IsNumberString()
  cedula: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  @IsOptional()
  @IsInt()
  esTrabajador: 1 | 0 = 1;

  @IsOptional()
  @IsString()
  contrasenia: string;

  constructor(usuario: UsuarioEntity) {
    this.nombres = usuario.nombres;
    this.apellidos = usuario.apellidos;
    this.cedula = usuario.cedula;
    this.contrasenia = usuario.contrasenia;
    this.estado = usuario.estado;
    this.esTrabajador = usuario.esTrabajador;
  }
}
