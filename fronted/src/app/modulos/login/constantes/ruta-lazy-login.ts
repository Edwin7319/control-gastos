import {Routes} from '@angular/router';

export const RUTA_LAZY_LOGIN: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import(
        '../login.module'
        )
        .then(
          modulo => modulo.LoginModule
        )

  }
];
