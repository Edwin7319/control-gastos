import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEditarUsuarioComponent } from './crear-editar-usuario.component';
import {FormularioTrabajadorModule} from '../../componentes/formulario-trabajador/formulario-trabajador.module';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [CrearEditarUsuarioComponent],
  imports: [
    CommonModule,
    FormularioTrabajadorModule,
    MatDialogModule
  ]
})
export class CrearEditarUsuarioModule { }
