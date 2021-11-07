import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AldeasComponent } from './components/aldeas/aldeas.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { BandaSonoraComponent } from './components/banda-sonora/banda-sonora.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrearPersonajeComponent } from './components/crear-personaje/crear-personaje.component';
import { ListarPersonajesComponent } from './components/listar-personajes/listar-personajes.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AldeasComponent,
    TemporadasComponent,
    BandaSonoraComponent,
    GaleriaComponent,
    CrearPersonajeComponent,
    ListarPersonajesComponent,
    Pagina404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
