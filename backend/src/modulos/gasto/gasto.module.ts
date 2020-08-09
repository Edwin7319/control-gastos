import { Module } from '@nestjs/common';
import { GastoController } from './gasto.controller';
import { GastoService } from './gasto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastoEntity } from './gasto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GastoEntity], 'default')],
  controllers: [GastoController],
  providers: [GastoService],
  exports: [GastoService],
})
export class GastoModule {
}
