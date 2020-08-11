import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.scss']
})
export class InputBusquedaComponent implements OnInit {

  @Output()
  busqueda: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  ayuda: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  busquedaIngresada(evento) {
    this.busqueda.emit(evento);
  }
}
