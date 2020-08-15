import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectEstadoComponent } from './select-estado.component';
import {DropdownModule} from 'primeng';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SelectEstadoComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    SelectEstadoComponent
  ]
})
export class SelectEstadoModule { }
