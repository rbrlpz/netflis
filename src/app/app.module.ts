import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
