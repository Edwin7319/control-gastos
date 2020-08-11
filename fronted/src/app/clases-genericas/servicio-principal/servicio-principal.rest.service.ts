import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalRestService<Interfaz> {

  protected readonly _httpClient;
  url = '';
  puerto = '';
  segmento = '';

  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }

  findAll(consulta?): Observable<[Interfaz[], number]> {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this._authService.recuperarTokenDeCookies()}`
    //   }
    // );
    // const options = {headers};
    const nuevaUrl = consulta ? `${this.url}:${this.puerto}/${this.segmento}?${consulta}` : `${this.url}:${this.puerto}/${this.segmento}`;
    return this._httpClient.get(nuevaUrl);
  }

  updateOne(id: number, datos: Interfaz): Observable<Interfaz> {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this._authService.recuperarTokenDeCookies()}`
    //   }
    // );
    // const options = {headers};
    return this._httpClient.put(`${this.url}:${this.puerto}/${this.segmento}/${id}`, datos);
  }

  create(datos: Interfaz): Observable<Interfaz> {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this._authService.recuperarTokenDeCookies()}`
    //   }
    // );
    // const options = {headers};
    return this._httpClient.post(`${this.url}:${this.puerto}/${this.segmento}`, datos);
  }

  finOneById(id: number): Observable<Interfaz> {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this._authService.recuperarTokenDeCookies()}`
    //   }
    // );
    // const options = {headers};
    // @ts-ignore
    return this._httpClient.get(`${this.url}:${this.puerto}/${this.segmento}/${id}`);
  }

  delete(id: number): Observable<Interfaz> {
    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this._authService.recuperarTokenDeCookies()}`
    //   }
    // );
    // const options = {headers};
    return this._httpClient.delete(`${this.url}:${this.puerto}/${this.segmento}/${id}`);
  }

}
