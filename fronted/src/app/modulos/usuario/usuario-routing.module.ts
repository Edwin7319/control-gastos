import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaGestionUsuarioComponent} from './rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';


const routes: Routes = [
  {
    path: 'gestion-usuario',
    component: RutaGestionUsuarioComponent
  },
  {
    path: '',
    redirectTo: 'gestion-usuario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
