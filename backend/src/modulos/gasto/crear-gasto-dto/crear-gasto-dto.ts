import { IsDateString, IsInt, IsNotEmpty, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
import { GastoEntity } from '../gasto.entity';

export class CrearGastoDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 120)
  nombre: string;

  @IsOptional()
  @IsString()
  @Length(3, 255)
  descripcion: string;

  @IsNotEmpty()
  @IsNumberString()
  cantidad: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  constructor(gasto: GastoEntity) {
    this.nombre = gasto.nombre;
    this.descripcion = gasto.descripcion;
    this.cantidad = gasto.cantidad;
    this.fecha = gasto.fecha;
  }
}
