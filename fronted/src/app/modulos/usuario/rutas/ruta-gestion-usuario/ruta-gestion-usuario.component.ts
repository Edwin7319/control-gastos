import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UsuarioRestService} from '../../servicios/usuario.rest.service';
import {Toast, ToasterService} from 'angular2-toaster';
import {UsuarioInterface} from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-ruta-gestion-usuario',
  templateUrl: './ruta-gestion-usuario.component.html',
  styleUrls: ['./ruta-gestion-usuario.component.scss']
})
export class RutaGestionUsuarioComponent implements OnInit {

  columnas = ['Nombres', 'Apellidos', 'Cedula', 'Estado', 'Acciones'];
  data: UsuarioInterface[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _toasterService: ToasterService
  ) {
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    const usuario$ = this._usuarioRestService.findAll();
    usuario$
      .subscribe(
        (usuarios: [UsuarioInterface[], number]) => {
          this.data = usuarios[0];
        },
        error => {
          console.error({
            mensaje: 'Error cargando usuarios',
            error
          });
        }
      );
  }

  actualizarEstado(registro: UsuarioInterface) {
    const idRegistro = registro.id;
    const nuevoEstado = registro.estado ? 0 : 1 as 1 | 0;
    const actualizado = {
      estado: nuevoEstado
    };

    const usuario$ = this._usuarioRestService.updateOne(idRegistro, actualizado);
    usuario$
      .subscribe(
        (usuario) => {
          const toast: Toast = {
            type: 'success',
            title: 'Exito',
            showCloseButton: true,
            body: 'Estado actualizado de manera correcta',
            timeout: 1000
          };
          this._toasterService.pop(toast);
          registro.estado = nuevoEstado;
        },
        error => {
          console.error({
            mensaje: 'Error actualizando estado',
            error
          });
        }
      );
  }
}
