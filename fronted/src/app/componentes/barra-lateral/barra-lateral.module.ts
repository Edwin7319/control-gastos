import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral.component';
import {NzButtonModule, NzIconModule, NzMenuModule, NzSwitchModule, NzToolTipModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [BarraLateralComponent],
  exports: [
    BarraLateralComponent
  ],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    RouterModule
  ]
})
export class BarraLateralModule { }
