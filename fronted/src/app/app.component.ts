import {Component, OnInit} from '@angular/core';
import {LoadingService} from './servicios/loadin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gastos';
  ocultar = false;

  constructor(
    private readonly _loadingService: LoadingService
  ) {
  }

  ngOnInit() {
    this.escucharLoadingService();
  }

  escucharLoadingService() {
    this._loadingService
      .cambioCargando
      .subscribe(
        (cambio) => {
          this.ocultar = cambio;
        }
      );
  }


}
