import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RutaGestionUsuarioComponent} from '../../rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import {UsuarioInterface} from '../../interfaces/usuario.interface';
import {UsuarioRestService} from '../../servicios/usuario.rest.service';
import {LoadingService} from '../../../../servicios/loadin.service';

@Component({
  selector: 'app-crear-editar-usuario',
  templateUrl: './crear-editar-usuario.component.html',
  styleUrls: ['./crear-editar-usuario.component.scss']
})
export class CrearEditarUsuarioComponent implements OnInit {

  usuarioCrearEditar: UsuarioInterface;

  constructor(
    private readonly _dialogRef: MatDialogRef<RutaGestionUsuarioComponent>,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _loadingService: LoadingService,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {
      usuario: UsuarioInterface,
    }
  ) {
  }

  ngOnInit(): void {
    if (this.data.usuario) {
      console.log('editando');
    } else {
      console.log('creando');
      this.usuarioCrearEditar = this.data.usuario;
    }
  }

  escucharDatosDeFormulario(evento: UsuarioInterface | boolean) {
    (!evento) ? this.usuarioCrearEditar = undefined : this.usuarioCrearEditar = evento as UsuarioInterface;
  }

  async enviarDatosModal() {
    const respuestaCrearEditar = await this.crearEditarUsuario();
    this._dialogRef.close(respuestaCrearEditar);
  }

  cancelarModal() {
    this._dialogRef.close();
  }

  crearEditarUsuario(): Promise<UsuarioInterface> {
    this._loadingService.habilitarLoading();
    if (!this.data.usuario) {
      const usuarioCrear$ = this._usuarioRestService
        .create(this.usuarioCrearEditar);

      return new Promise<UsuarioInterface>(
        resolve => {
          usuarioCrear$
            .subscribe(
              (usuarioCreado) => {
                this._loadingService.deshabilitarLoading();
                resolve(usuarioCreado);
              },
              error => {
                this._loadingService.deshabilitarLoading();
                console.error({
                  mensaje: 'Error creando usuario',
                  error,
                  data: this.usuarioCrearEditar
                });
              }
            );
        }
      );
    } else {
      const usuarioEditado$ = this._usuarioRestService
        .updateOne(this.data.usuario.id, this.usuarioCrearEditar);

      return new Promise<UsuarioInterface>(
        resolve => {
          usuarioEditado$
            .subscribe(
              (usuarioEditado) => {
                this._loadingService.deshabilitarLoading();
                resolve(usuarioEditado);
              },
              error => {
                this._loadingService.deshabilitarLoading();
                console.error({
                  mensaje: 'Error editando usuario',
                  error,
                  data: this.usuarioCrearEditar
                });
              }
            );
        }
      );
    }
  }
}
