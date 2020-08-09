import { IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { RolEntity } from '../rol.entity';

export class CrearRolDto {

  @IsNotEmpty()
  @Length(3, 60)
  @IsString()
  nombre: string;

  @IsOptional()
  @Length(3, 255)
  @IsString()
  descripcion: string = null;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  constructor(rol: RolEntity) {
    this.nombre = rol.nombre;
    this.descripcion = rol.descripcion;
  }
}
