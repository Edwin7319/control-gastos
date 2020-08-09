import {Routes} from '@angular/router';

export const RUTA_LAZY_USUARIO: Routes = [
  {
    path: 'usuario-modulo',
    loadChildren: () =>
      import(
        '../usuario.module'
        ).then(
        modulo => modulo.UsuarioModule
      )
  }
];
