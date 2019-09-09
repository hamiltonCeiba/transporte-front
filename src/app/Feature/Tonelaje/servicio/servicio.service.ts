import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tonelaje } from 'src/app/Core/Tonelaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  listarTonelaje() {
    return this.http.get<Tonelaje[]>(environment.urlListarTonelaje);
  }

  guardarTonelaje(tonelaje: Tonelaje) {
    return this.http.post<Tonelaje>(environment.urlCrearTonelaje, JSON.parse(JSON.stringify(tonelaje)));
  }

  actualizarTonelaje(tonelaje: Tonelaje) {
    //return this.http.post<Tonelaje>(environment.url)
  }

  obtenerTonelajePorId(idTonelaje: number) {
    return this.http.put<Tonelaje>(environment.urlEliminarTonelaje, JSON.parse(JSON.stringify(idTonelaje)));
  }
}
