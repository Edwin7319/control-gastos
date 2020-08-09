import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaNoEncontradaComponent} from './componentes/ruta-no-encontrada/ruta-no-encontrada.component';
import {RUTA_LAZY_LOGIN} from './modulos/login/constantes/ruta-lazy-login';
import {RUTA_LAZY_USUARIO} from './modulos/usuario/constantes/ruta-lazy-usuario';


const routes: Routes = [
  ...RUTA_LAZY_LOGIN,
  ...RUTA_LAZY_USUARIO,
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
