import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AldeasComponent } from './components/aldeas/aldeas.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { BandaSonoraComponent } from './components/banda-sonora/banda-sonora.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AldeasComponent,
    TemporadasComponent,
    BandaSonoraComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
