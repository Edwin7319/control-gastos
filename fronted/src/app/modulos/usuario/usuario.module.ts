import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {RutaGestionUsuarioComponent} from './rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import {TituloPantallaModule} from '../../componentes/titulo-pantalla/titulo-pantalla.module';
import {ButtonModule, TableModule} from 'primeng';
import {InputBusquedaModule} from '../../componentes/input-busqueda/input-busqueda.module';
import {MatDialogModule} from '@angular/material/dialog';
import {CrearEditarUsuarioModule} from './modales/crear-editar-usuario/crear-editar-usuario.module';


@NgModule({
  declarations: [
    RutaGestionUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    TituloPantallaModule,
    TableModule,
    ButtonModule,
    InputBusquedaModule,
    MatDialogModule,
    CrearEditarUsuarioModule
  ]
})
export class UsuarioModule {
}
