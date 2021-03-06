import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Feature/Tonelaje/listar/listar.component';
import { AgregarComponent } from './Feature/Tonelaje/agregar/agregar.component';
import { EditarComponent } from './Feature/Tonelaje/editar/editar.component';
import { ListarVehiculoComponent } from './Feature/Vehiculo/listar-vehiculo/listar-vehiculo.component';
import { AgregarVehiculoComponent } from './Feature/Vehiculo/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './Feature/Vehiculo/editar-vehiculo/editar-vehiculo.component';
import { ListarConductorComponent } from './Feature/Conductor/listar-conductor/listar-conductor.component';
import { ListarServicioComponent } from './Feature/Servicio/listar-servicio/listar-servicio.component';
import { CrearConductorComponent } from './Feature/Conductor/crear-conductor/crear-conductor.component';
import { CrearServicioComponent } from './Feature/Servicio/crear-servicio/crear-servicio.component';




const routes: Routes = [
  {path: 'listarTonelaje', component: ListarComponent},
  {path: 'agregarTonelaje', component: AgregarComponent},
  {path: 'editarTonelaje', component: EditarComponent},

  {path: 'listarVehiculo', component: ListarVehiculoComponent},
  {path: 'agregarVehiculo', component: AgregarVehiculoComponent},
  {path: 'editarVehiculo', component: EditarVehiculoComponent},

  {path: 'listarConductor', component: ListarConductorComponent},
  {path: 'agregarConductor', component: CrearConductorComponent},

  {path: 'listarServicio', component: ListarServicioComponent},
  {path: 'agregarServicio', component: CrearServicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
