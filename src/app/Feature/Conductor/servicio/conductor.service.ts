import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from 'src/app/Core/Conductor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  conductor: Conductor = new Conductor();
  constructor(private http: HttpClient) { }

  listarConductor() {
    return this.http.get<Conductor[]>(environment.urlListarConductor);
  }

  guardarConductor(conductor: Conductor) {
    console.log(JSON.parse(JSON.stringify(conductor)));
    return this.http.post<Conductor>(environment.urlAgregarConductor, JSON.parse(JSON.stringify(conductor)));
  }
}
