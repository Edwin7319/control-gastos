import {Injectable} from '@angular/core';
import {ServicioPrincipalRestService} from '../../../clases-genericas/servicio-principal/servicio-principal.rest.service';
import {UsuarioInterface} from '../interfaces/usuario.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService extends ServicioPrincipalRestService<UsuarioInterface> {

  constructor(
    protected readonly _httpClient: HttpClient
  ) {
    super(
      _httpClient,
    );
    this.url = environment.url;
    this.puerto = environment.puerto;
    this.segmento = 'usuario';
  }
}
