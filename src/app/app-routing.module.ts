import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Feature/Tonelaje/listar/listar.component';
import { AgregarComponent } from './Feature/Tonelaje/agregar/agregar.component';
import { EditarComponent } from './Feature/Tonelaje/editar/editar.component';


const routes: Routes = [
  {path: 'listarTonelaje', component: ListarComponent},
  {path: 'agregarTonelaje', component: AgregarComponent},
  {path: 'editarTonelaje', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
