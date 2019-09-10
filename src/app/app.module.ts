import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './Feature/Tonelaje/agregar/agregar.component';
import { ListarComponent } from './Feature/Tonelaje/listar/listar.component';
import { EditarComponent } from './Feature/Tonelaje/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './Feature/Tonelaje/servicio/servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { NavarComponent } from './shared/navar/navar.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    AgregarComponent,
    NavarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
