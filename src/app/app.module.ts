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
import { AgregarVehiculoComponent } from './Feature/Vehiculo/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './Feature/Vehiculo/editar-vehiculo/editar-vehiculo.component';
import { ListarVehiculoComponent } from './Feature/Vehiculo/listar-vehiculo/listar-vehiculo.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    AgregarComponent,
    NavarComponent,
    ListarVehiculoComponent,
    AgregarVehiculoComponent,
    EditarVehiculoComponent
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
