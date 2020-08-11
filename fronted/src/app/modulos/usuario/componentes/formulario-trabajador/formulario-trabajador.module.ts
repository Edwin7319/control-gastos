import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioTrabajadorComponent} from './formulario-trabajador.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormularioTrabajadorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormularioTrabajadorComponent
  ]
})
export class FormularioTrabajadorModule {
}
