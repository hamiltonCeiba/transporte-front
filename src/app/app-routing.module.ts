import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Feature/Tonelaje/listar/listar.component';
import { AgregarComponent } from './Feature/Tonelaje/agregar/agregar.component';
import { EditarComponent } from './Feature/Tonelaje/editar/editar.component';
import { ListarVehiculoComponent } from './Feature/Vehiculo/listar-vehiculo/listar-vehiculo.component';
import { AgregarVehiculoComponent } from './Feature/Vehiculo/agregar-vehiculo/agregar-vehiculo.component';


const routes: Routes = [
  {path: 'listarTonelaje', component: ListarComponent},
  {path: 'agregarTonelaje', component: AgregarComponent},
  {path: 'editarTonelaje', component: EditarComponent},

  {path: 'listarVehiculo', component: ListarVehiculoComponent},
  {path: 'agregarVehiculo', component: AgregarVehiculoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
