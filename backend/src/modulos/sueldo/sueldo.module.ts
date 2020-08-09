import { Module } from '@nestjs/common';
import { SueldoService } from './sueldo.service';
import { SueldoController } from './sueldo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SueldoEntity } from './sueldo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SueldoEntity], 'default')],
  providers: [SueldoService],
  controllers: [SueldoController],
  exports: [SueldoService],
})
export class SueldoModule {
}
