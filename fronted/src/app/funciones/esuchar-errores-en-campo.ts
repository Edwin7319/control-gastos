import {AbstractControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

export function escucharErroresEnCampoFormulario(
  formulario: FormGroup,
  nombreCampo: string,
  arregloMensajesDeError: any[],
  objetoMensajesDeError: {},
) {
  const campo$ = formulario.get(nombreCampo);
  campo$
    .valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(
      (campo) => {
        arregloMensajesDeError.pop();
        arregloMensajesDeError.push(
          _llenarMensajesError(campo$, objetoMensajesDeError)
        );
      },
      error => {
        console.error({
          mensaje: 'Error con validaciones'
        });
      }
    );
}

function _llenarMensajesError(
  control: AbstractControl,
  objetoErrores: {}
): string[] | boolean {
  if ((control.dirty || control.touched) && control.errors) {
    return Object.keys(control.errors).map(
      (llave) => {
        return objetoErrores[llave];
      }
    );
  } else {
    return false;
  }

}
