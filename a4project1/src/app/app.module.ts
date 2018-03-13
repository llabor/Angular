import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { TiposDatosComponent } from './tipos-datos/tipos-datos.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
// import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';



@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    TiposDatosComponent,
    ViewmodeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
