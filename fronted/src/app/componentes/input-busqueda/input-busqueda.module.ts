import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputBusquedaComponent} from './input-busqueda.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InputBusquedaComponent],
  exports: [
    InputBusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputBusquedaModule {
}
