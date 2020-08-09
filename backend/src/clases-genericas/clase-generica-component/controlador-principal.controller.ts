import {
  BadRequestException,
  Body,
  Controller,
  Delete, Get,
  InternalServerErrorException,
  Param,
  Post, Put, Query, UseGuards,
} from '@nestjs/common';
import { ServicioPrincipalRestService } from './servicio-principal-rest.service';
import { validate } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class ControladorPrincipalController<Entity> {
  protected readonly _repositoryService: ServicioPrincipalRestService<Entity>;
  private crearDto: any;
  private actualizarDto: any;

  constructor(
    repositoryService: ServicioPrincipalRestService<Entity>,
    crearDto,
    actualizarDto,
  ) {
    this._repositoryService = repositoryService;
    this.crearDto = crearDto;
    this.actualizarDto = actualizarDto;
  }

  @Post()
  async crear(
    @Body() datos: Entity,
  ) {
    const datosNuevos = new this.crearDto(datos);
    const errores = await validate(datosNuevos);
    const existeErrores = errores.length > 0;
    if (!existeErrores) {
      try {
        const respuesta: any = await this._repositoryService.crear(datos);
        return {
          data: respuesta,
          id: respuesta.id,
        };
      } catch (e) {
        throw new InternalServerErrorException({ mensaje: 'Error servidor', tipo: e });
      }
    } else {
      throw new BadRequestException({ mensaje: 'Error usuario', tipo: errores });
    }
  }

  @Put(':id')
  async actualizar(
    @Param('id') id: number,
    @Body() datos: Entity,
  ) {
    const datosAActualizar = new this.actualizarDto(datos);
    const errores = await validate(datosAActualizar);
    const existeErrores = errores.length > 0;
    if (!existeErrores) {
      try {
        return await this._repositoryService.actualizar(id, datos);
      } catch (e) {
        throw new InternalServerErrorException({ mensaje: 'Error servidor', tipo: 500 });
      }
    } else {
      console.log(errores);
      throw new BadRequestException({ mensaje: 'Error usuario', tipo: 500 });
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listarTodo() {
    try {
      return await this._repositoryService.listarTodos();
    } catch (e) {
      throw new InternalServerErrorException({ mensaje: 'Error servidor', tipo: 500 });
    }
  }

  @Get(':id')
  async listarPorId(
    @Param('id') id: number,
  ) {
    try {
      return await this._repositoryService.listarPorId(id);
    } catch (e) {
      throw new InternalServerErrorException({ mensaje: 'No existe resultados', tipo: 500 });
    }
  }

  @Delete(':id')
  async eliminar(
    @Param('id') id: number,
  ) {
    try {
      return await this._repositoryService.eliminar(id);
    } catch (e) {
      throw new InternalServerErrorException({ mensaje: 'Error servidor', tipo: 500 });
    }
  }

}
