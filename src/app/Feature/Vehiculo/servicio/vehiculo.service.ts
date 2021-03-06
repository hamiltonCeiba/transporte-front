import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { environment } from 'src/environments/environment';
import { Tonelaje } from 'src/app/Core/Tonelaje';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  vehiculo: Vehiculo = new Vehiculo();
  constructor(private http: HttpClient) { }

  listarVehiculo() {
    return this.http.get<Vehiculo[]>(environment.urlListarVehiculo);
  }

  guardarVehiculo(vehiculo: Vehiculo) {
    console.log(JSON.parse(JSON.stringify(vehiculo)));
    return this.http.post<Vehiculo>(environment.urlAgregarVehiculo, JSON.parse(JSON.stringify(vehiculo)));
  }
  listarTonelaje() {
    return this.http.get<Tonelaje[]>(environment.urlListarTonelaje);
  }

  obtenerVehiculoPorId(idVehiculo: number){
    this.vehiculo.idVehiculo = idVehiculo;
    return this.http.put<Vehiculo>(environment.urlBuscarVehiculoPorId, JSON.parse(JSON.stringify(this.vehiculo)));
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    console.log(JSON.parse(JSON.stringify(vehiculo)));
    return this.http.put<Vehiculo>(environment.urlActualizarVehiculo, JSON.parse(JSON.stringify(vehiculo)));
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    return this.http.put<Vehiculo>(environment.urlEliminarVehiculo, JSON.parse(JSON.stringify(vehiculo)));
  }
}
