import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tonelaje } from 'src/app/Core/Tonelaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  tonelaje: Tonelaje = new Tonelaje();
  constructor(private http: HttpClient) { }

  listarTonelaje() {
    return this.http.get<Tonelaje[]>(environment.urlListarTonelaje);
  }

  guardarTonelaje(tonelaje: Tonelaje) {
    console.log(JSON.parse(JSON.stringify(tonelaje)));
    return this.http.post<Tonelaje>(environment.urlCrearTonelaje, JSON.parse(JSON.stringify(tonelaje)));
  }

  actualizarTonelaje(tonelaje: Tonelaje) {
    return this.http.put<Tonelaje>(environment.urlActualizarTonelaje, JSON.parse(JSON.stringify(tonelaje)));
  }

  obtenerTonelajePorId(idTonelaje: number) {
    this.tonelaje.id = idTonelaje;
    console.log(JSON.parse(JSON.stringify(this.tonelaje)));
    return this.http.put<Tonelaje>(environment.urlBuscarTonelajePorId, JSON.parse(JSON.stringify(this.tonelaje)));
  }

  eliminarTonelaje(tonelaje: Tonelaje) {
    console.log(JSON.parse(JSON.stringify(tonelaje)));
    return this.http.put<Tonelaje>(environment.urlEliminarTonelaje, JSON.parse(JSON.stringify(tonelaje)));
  }
}
