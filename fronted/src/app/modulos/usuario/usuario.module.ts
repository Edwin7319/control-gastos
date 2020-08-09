import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {RutaGestionUsuarioComponent} from './rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {TituloPantallaModule} from '../../componentes/titulo-pantalla/titulo-pantalla.module';


@NgModule({
  declarations: [
    RutaGestionUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    TituloPantallaModule
  ]
})
export class UsuarioModule {
}
