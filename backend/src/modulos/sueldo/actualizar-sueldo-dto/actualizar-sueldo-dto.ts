import { IsDate, IsInt, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
import { SueldoEntity } from '../sueldo.entity';

export class ActualizarSueldoDto {
  @IsOptional()
  @IsString()
  @Length(3, 255)
  descripcion: string;

  @IsOptional()
  @IsNumberString()
  cantidad: string;

  @IsOptional()
  @IsDate()
  fechaInicio: string;

  @IsOptional()
  @IsDate()
  fechaFin: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  constructor(sueldo: SueldoEntity) {
    this.descripcion = sueldo.descripcion;
    this.cantidad = sueldo.cantidad;
    this.fechaInicio = sueldo.fechaInicio;
    this.fechaFin = sueldo.fechaFin;
    this.estado = sueldo.estado;
  }

}
