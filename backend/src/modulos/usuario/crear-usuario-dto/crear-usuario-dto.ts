import { IsInt, IsNotEmpty, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
import { UsuarioEntity } from '../usuario.entity';

export class CrearUsuarioDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 120)
  nombres: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 120)
  apellidos: string;

  @IsNotEmpty()
  @IsNumberString()
  cedula: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  constructor(usuario: UsuarioEntity) {
    this.nombres = usuario.nombres;
    this.apellidos = usuario.apellidos;
    this.cedula = usuario.cedula;

  }

}
