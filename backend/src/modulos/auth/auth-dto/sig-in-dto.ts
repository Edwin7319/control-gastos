import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class SigInDto {
  @IsNotEmpty()
  @IsNumberString()
  cedula: string;

  @IsNotEmpty()
  @IsString()
  contrasenia: string;
}
