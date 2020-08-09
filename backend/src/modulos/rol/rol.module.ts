import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolEntity } from './rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity], 'default')],
  providers: [RolService],
  controllers: [RolController],
  exports: [RolService],
})
export class RolModule {
}
