import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {ToasterModule} from 'angular2-toaster';
import {NzButtonModule, NzIconModule, NzWaveModule} from 'ng-zorro-antd';
import {RutaNoEncontradaComponent} from './componentes/ruta-no-encontrada/ruta-no-encontrada.component';
import {UsuarioRestService} from './modulos/usuario/servicios/usuario.rest.service';
import {LoadingService} from './servicios/loadin.service';
import {BlockUIModule} from 'primeng';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BarraLateralModule} from './componentes/barra-lateral/barra-lateral.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RutaNoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    NzWaveModule,
    NzButtonModule,
    NzIconModule,
    BlockUIModule,
    SimpleNotificationsModule.forRoot(),
    BarraLateralModule,
  ],
  providers: [
    UsuarioRestService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
