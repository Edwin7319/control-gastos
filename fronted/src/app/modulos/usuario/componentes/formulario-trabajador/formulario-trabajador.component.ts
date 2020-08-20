import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioInterface} from '../../interfaces/usuario.interface';
import {debounceTime} from 'rxjs/operators';
import {escucharErroresEnCampoFormulario} from '../../../../funciones/esuchar-errores-en-campo';
import {MENSAJES_DE_ERROR_APELLIDO, MENSAJES_DE_ERROR_CEDULA, MENSAJES_DE_ERROR_NOMBRE} from './mensajes-error-formulario';
import {NotificationsService} from 'angular2-notifications';
import {TOAST_NOTIFICATION} from '../../../../constantes/configuracion-notification';

@Component({
  selector: 'app-formulario-trabajador',
  templateUrl: './formulario-trabajador.component.html',
  styleUrls: ['./formulario-trabajador.component.scss']
})
export class FormularioTrabajadorComponent implements OnInit {

  formularioUsuario: FormGroup;

  @Output()
  datosUsuario: EventEmitter<UsuarioInterface | boolean> = new EventEmitter<UsuarioInterface | boolean>();

  @Input()
  usuario: UsuarioInterface;

  arregloMensajesDeErrorNombre: string[] = [];
  arregloMensajesDeErrorApellido: string[] = [];
  arregloMensajesDeErrorCedula: string[] = [];

  constructor(
    private readonly _notificationService: NotificationsService
  ) {
    this._generarFormularioUsuario();
  }

  ngOnInit(): void {
    this.escucharFormulario();
    escucharErroresEnCampoFormulario(this.formularioUsuario, 'nombres', this.arregloMensajesDeErrorNombre, MENSAJES_DE_ERROR_NOMBRE);
    escucharErroresEnCampoFormulario(this.formularioUsuario, 'apellidos', this.arregloMensajesDeErrorApellido, MENSAJES_DE_ERROR_APELLIDO);
    escucharErroresEnCampoFormulario(this.formularioUsuario, 'cedula', this.arregloMensajesDeErrorCedula, MENSAJES_DE_ERROR_CEDULA);
    if (this.usuario !== undefined) {
      this.cargarDatosDeFormulario();
    }
  }

  private _generarFormularioUsuario() {
    this.formularioUsuario = new FormGroup({
      nombres: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.pattern(/[A-z]+/)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.pattern(/[A-z]+/)
      ]),
      cedula: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/[0-9]+/)
      ])
    });
  }

  escucharFormulario() {
    const formularioUsuario$ = this.formularioUsuario.valueChanges;
    formularioUsuario$
      .pipe(
        debounceTime(1500)
      )
      .subscribe(
        (valoresFormulario) => {
          const formularioCorrecto = this.formularioUsuario.valid;
          if (formularioCorrecto) {
            this._notificationService
              .info(
                'Correcto',
                'Formulario usuario validao',
                TOAST_NOTIFICATION
              );
            this.datosUsuario.emit(valoresFormulario);
          } else {
            this._notificationService
              .warn(
                'Cuidado',
                'Formulario usuario tiene errores',
                TOAST_NOTIFICATION
              );
            this.datosUsuario.emit(false);
          }
        }
      );
  }

  enviarFormulario() {
    this.formularioUsuario;
  }

  cargarDatosDeFormulario() {
    this.formularioUsuario.setValue({
        nombres: this.usuario.nombres,
        apellidos: this.usuario.apellidos,
        cedula: this.usuario.cedula,
      }
    );
  }

}
