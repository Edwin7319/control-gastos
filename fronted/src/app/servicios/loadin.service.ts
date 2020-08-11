import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

  cargando = false;
  cambioCargando: EventEmitter<boolean> = new EventEmitter();

  habilitarLoading() {
    this.cargando = true;
    this.cambioCargando.emit(true);
  }

  deshabilitarLoading() {
    setTimeout(() => {
      this.cargando = false;
      this.cambioCargando.emit(false);
    }, 500);
  }
}
