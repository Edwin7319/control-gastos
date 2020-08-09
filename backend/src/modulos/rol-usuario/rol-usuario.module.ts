import { Module } from '@nestjs/common';
import { RolUsuarioService } from './rol-usuario.service';
import { RolUsuarioController } from './rol-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolUsuarioEntity } from './rol-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolUsuarioEntity], 'default')],
  providers: [RolUsuarioService],
  controllers: [RolUsuarioController],
  exports: [RolUsuarioService],
})
export class RolUsuarioModule {
}
