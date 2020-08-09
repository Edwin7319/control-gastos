import { IsDate, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
import { SueldoEntity } from '../sueldo.entity';

export class CrearSueldoDto {

  @IsOptional()
  @IsString()
  @Length(3, 255)
  descripcion: string;

  @IsNotEmpty()
  @IsNumberString()
  cantidad: string;

  @IsNotEmpty()
  @IsDate()
  fechaInicio: string;

  @IsNotEmpty()
  @IsDate()
  fechaFin: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  constructor(sueldo: SueldoEntity) {
    this.descripcion = sueldo.descripcion;
    this.cantidad = sueldo.cantidad;
    this.fechaInicio = sueldo.fechaInicio
    this.fechaFin = sueldo.fechaFin;
  }

}
