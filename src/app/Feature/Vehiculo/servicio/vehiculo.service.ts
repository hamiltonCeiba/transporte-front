import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  listarTonelaje() {
    return this.http.get<Vehiculo[]>(environment.urlListarVehiculo);
  }
}
