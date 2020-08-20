import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from 'primeng';

@Component({
  selector: 'app-select-estado',
  templateUrl: './select-estado.component.html',
  styleUrls: ['./select-estado.component.scss']
})
export class SelectEstadoComponent implements OnInit {

  @Output()
  estadoSeleccionado: EventEmitter<number> = new EventEmitter<number>();

  estados: SelectItem[] = [
    {
      label: 'Activo',
      value: 1
    },
    {
      label: 'Inactivo',
      value: 0
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  esucharSelect(evento) {
    const estadoSeleccionado = evento.value === null ? null : evento.value.value;
    this.estadoSeleccionado.emit(estadoSeleccionado);
  }
}
