import {Component, OnInit} from '@angular/core';
import {UsuarioRestService} from '../../servicios/usuario.rest.service';
import {UsuarioInterface} from '../../interfaces/usuario.interface';
import {LoadingService} from '../../../../servicios/loadin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CrearEditarUsuarioComponent} from '../../modales/crear-editar-usuario/crear-editar-usuario.component';
import {NotificationsService} from 'angular2-notifications';
import {TOAST_NOTIFICATION} from '../../../../constantes/configuracion-notification';

@Component({
  selector: 'app-ruta-gestion-usuario',
  templateUrl: './ruta-gestion-usuario.component.html',
  styleUrls: ['./ruta-gestion-usuario.component.scss']
})
export class RutaGestionUsuarioComponent implements OnInit {

  ruta = ['/usuario-modulo', 'gestion-usuario'];
  data: UsuarioInterface[] = [];
  cantidad: number;
  columnas = [
    {
      field: 'nombres',
      header: 'Nombres'
    },
    {
      field: 'apellidos',
      header: 'Apellidos'
    },
    {
      field: 'cedula',
      header: 'Cedula'
    },
    {
      field: 'estado',
      header: 'Estado'
    },
    {
      field: 'id',
      header: 'Acciones'
    },
  ];

  consultaIncial = {
    relations: ['gastos', 'sueldos'],
    where: {},
    skip: 0,
    take: 5,
    order: {
      id: 'DESC'
    }
  };

  constructor(
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _notificationService: NotificationsService,
    private readonly _loadingService: LoadingService,
    private readonly _router: Router,
    private readonly _dialog: MatDialog,
    private readonly _actvidatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.cargarDatos(this.consultaIncial);
  }

  cargarDatos(consulta) {
    const usuario$ = this._usuarioRestService.findAll('busqueda=' + JSON.stringify(consulta));
    usuario$
      .subscribe(
        (usuarios: [UsuarioInterface[], number]) => {
          this.data = usuarios[0];
          this.cantidad = usuarios[1];
        },
        error => {
          this._notificationService
            .error(
              'Error',
              'Error cargando datos',
              TOAST_NOTIFICATION
            );
          console.error({
            mensaje: 'Error cargando usuarios',
            error
          });
        }
      );
  }

  cargarMasDatos(evento) {
    this.consultaIncial.skip = evento.first;
    this.cargarDatos(this.consultaIncial);
  }

  escucharBusquedaIngresada(busqueda: string) {
    this._loadingService.habilitarLoading();
    const busquedaIngresada = busqueda.trim();
    if (busquedaIngresada === '') {
      this.consultaIncial.where = {};
      this.consultaIncial.skip = 0;
      this.consultaIncial.take = 5;
      this.cargarDatos(this.consultaIncial);
      this._loadingService.deshabilitarLoading();
    } else {
      this.consultaIncial.where = {
        nombres: `Like("%25${busqueda}%25")`,
        apellidos: `Like("%25${busqueda}%25")`,
        cedula: `Like("%25${busqueda}%25")`,
        edwOr: true
      };
      this.consultaIncial.skip = 0;
      this.consultaIncial.take = 5;
      this.cargarDatos(this.consultaIncial);
      this._loadingService.deshabilitarLoading();
    }
    this._router.navigate(this.ruta, {queryParams: {busqueda: JSON.stringify(this.consultaIncial)}});

  }

  actualizarEstado(registro: UsuarioInterface) {
    this._loadingService.habilitarLoading();
    const idRegistro = registro.id;
    const nuevoEstado = registro.estado ? 0 : 1 as 1 | 0;
    const actualizado = {
      estado: nuevoEstado
    };

    const usuario$ = this._usuarioRestService.updateOne(idRegistro, actualizado);
    usuario$
      .subscribe(
        (usuario) => {
          this._notificationService
            .success(
              'Exito',
              'Estado actualizado de manera correcta',
              TOAST_NOTIFICATION
            );
          registro.estado = nuevoEstado;
          this._loadingService.deshabilitarLoading();
        },
        error => {
          console.error({
            mensaje: 'Error actualizando estado',
            error
          });
        }
      );
  }

  abrirModalCrear() {
    const dialog$ = this._dialog.open(CrearEditarUsuarioComponent, {
      width: '550px',
      data: {
        usuario: undefined
      }
    });

    const respuestaModal$ = dialog$.afterClosed();
    respuestaModal$
      .subscribe(
        (respuesta) => {
          if (respuesta) {
            this.data.unshift(respuesta);
            this._notificationService
              .success(
                'Exito',
                'Trabajador creado de manera correcta',
                TOAST_NOTIFICATION
              );
          }
        }
      );

  }

  abrirModalEditar(usuario: UsuarioInterface) {
    const indice = this.data.indexOf(usuario);
    const dialog$ = this._dialog.open(CrearEditarUsuarioComponent, {
      width: '550px',
      data: {
        usuario: usuario
      }
    });

    const respuestaModal$ = dialog$.afterClosed();
    respuestaModal$
      .subscribe(
        (respuesta) => {
          if (respuesta) {
            this.data[indice] = respuesta;
            this._notificationService
              .success(
                'Exito',
                'Trabajador actualizado de manera correcta',
                TOAST_NOTIFICATION
              );
          }
        }
      );
  }

  buscarEstadoSeleccionado(estado) {
    this._loadingService.habilitarLoading();
    const estadoABuscar = estado !== null ? estado : undefined;
    this.consultaIncial.where = {
      estado: estadoABuscar
    };
    this.consultaIncial.skip = 0;
    this.consultaIncial.take = 5;
    this.cargarDatos(this.consultaIncial);
    this._router.navigate(this.ruta, {queryParams: {busqueda: JSON.stringify(this.consultaIncial)}});
    this._loadingService.deshabilitarLoading();
  }
}
