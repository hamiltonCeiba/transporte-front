import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from 'src/app/Core/Servicio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  listarServicio() {
    return this.http.get<Servicio[]>(environment.urlListarServicio);
  }
}
