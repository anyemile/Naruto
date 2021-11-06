import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Llamada de Componentes 

import { AldeasComponent } from './components/aldeas/aldeas.component';
import { BandaSonoraComponent } from './components/banda-sonora/banda-sonora.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JinchurikisComponent } from './components/jinchurikis/jinchurikis.component';

const routes: Routes = [
  { path: 'Aldeas', component:AldeasComponent },
  { path: 'Banda-S', component:BandaSonoraComponent },
  { path: 'Galeria', component:GaleriaComponent },
  { path: 'Temporadas', component: TemporadasComponent },
  { path: 'Inicio', component: InicioComponent },
  { path:'Jinchurikis', component: JinchurikisComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
