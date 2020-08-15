import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Like, Repository, createQueryBuilder } from 'typeorm/index';

@Injectable()
export class ServicioPrincipalRestService<Entity> {
  protected readonly _repositoryEntity: Repository<Entity>;
  private entidad?;
  private nombreRepositorio?;

  constructor(
    _repositoryEntity: Repository<Entity>,
    Entidad?: any,
    nombreRepositorio?: string,
  ) {
    this._repositoryEntity = _repositoryEntity;
    this.entidad = Entidad;
    this.nombreRepositorio = nombreRepositorio;
  }

  crear(datos: Entity): Promise<Entity | string> {
    try {
      return this._repositoryEntity.save(datos);
    } catch (e) {
      throw new InternalServerErrorException('Error con servidor');
    }
  }

  async actualizar(id: number, dato: Entity): Promise<Entity | string> {
    try {
      const datoEncontrado = await this._repositoryEntity.findOne(id);
      if (datoEncontrado) {
        await this._repositoryEntity.update(id, dato);
        return this._repositoryEntity.findOne(id);
      } else {
        return new Promise((resolve, reject) => {
          reject('No se encontro coincidencias');
        });
      }
    } catch (e) {
      throw new InternalServerErrorException('Error con servidor');
    }
  }

  async listarTodos(consulta?): Promise<[Entity[], number] | string> {
    const JsonConsulta = consulta ? JSON.parse(consulta) : undefined;
    JsonConsulta.where.edwOr  = JsonConsulta.where.edwOr ? JsonConsulta.where.edwOr : false;
    Object.values(JsonConsulta.where)
    .forEach(
      (valor) => {
        if(typeof valor === 'string') {
         if(valor.includes('Like')) {
          const separador1 = valor.indexOf('%');
          const separador2 = valor.lastIndexOf('%');
          const stringABuscar = valor.substring(separador1, separador2 + 1)     
          for(const key in JsonConsulta.where) {
            if(JsonConsulta.where[key] === valor) {
             JsonConsulta.where[key] = Like(stringABuscar)
            }
          }    
         }
        }
      }
    )
    if(JsonConsulta.where.edwOr) {
      const arregloWhereOr = []
      delete JsonConsulta.where.edwOr
      Object.values(JsonConsulta.where)
      .forEach(
        (valor) => {
          for(const key in JsonConsulta.where) {
            if(JsonConsulta.where[key] === valor) {
              arregloWhereOr.push({
                [key]: valor
              }
              )
             }
          }
        }
      );
      JsonConsulta.where = arregloWhereOr
    }
    delete JsonConsulta.where.edwOr
    try {
      return await this._repositoryEntity.findAndCount(JsonConsulta);
    } catch (e) {
      console.error({
        mensaje: 'Error al recuperar todos',
        error: e,
        data: consulta,
      });
      throw new InternalServerErrorException('Error con base servidor');
    }
  }

  async listarPorId(id: number): Promise<Entity | string> {
    try {
      const datoEncontrado = await this._repositoryEntity.findOne(id);
      if (datoEncontrado) {
        return datoEncontrado;
      } else {
        return new Promise((resolve, reject) => {
          reject('No se encontro coincidencias');
        });
      }
    } catch (e) {
      throw new InternalServerErrorException('Error con el servidor');
    }
  }

  async eliminar(id: number): Promise<Entity> {
    try {
      const datoEncontrado = await this._repositoryEntity.findOne(id);
      if (datoEncontrado) {
        this._repositoryEntity.delete(id);
        return datoEncontrado;
      } else {
        return new Promise((resolve, reject) => {
          reject('No se encontro resultados');
        });
      }
    } catch (e) {
      throw new InternalServerErrorException('Error con el servidor');
    }
  }

}
