import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-titulo-pantalla',
  templateUrl: './titulo-pantalla.component.html',
  styleUrls: ['./titulo-pantalla.component.scss']
})
export class TituloPantallaComponent implements OnInit {

  @Input()
  titulo: string;

  @Input()
  descripcion: string;

  @Input()
  ejemplo: string;

  @Input()
  imagen: string;

  constructor() {
  }

  ngOnInit(): void {
  }


}
