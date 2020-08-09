import { IsDateString, IsInt, IsOptional, IsNumberString, IsString, Length } from 'class-validator';
import { GastoEntity } from '../gasto.entity';

export class ActualizarGastoDto {

  @IsOptional()
  @IsString()
  @Length(3, 120)
  nombre: string;

  @IsOptional()
  @IsString()
  @Length(3, 255)
  descripcion: string;

  @IsOptional()
  @IsNumberString()
  cantidad: string;

  @IsOptional()
  @IsInt()
  estado: 1 | 0 = 1;

  @IsOptional()
  @IsDateString()
  fecha: string;

  constructor(gasto: GastoEntity) {
    this.nombre = gasto.nombre;
    this.descripcion = gasto.descripcion;
    this.cantidad = gasto.cantidad;
    this.fecha = gasto.fecha;
    this.estado = gasto.estado;
  }

}
