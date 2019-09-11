import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/Core/Servicio';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { Conductor } from 'src/app/Core/Conductor';
import { VehiculoService } from '../../Vehiculo/servicio/vehiculo.service';
import { ServicioService } from '../servicio/servicio.service';
import { Router } from '@angular/router';
import { ConductorService } from '../../Conductor/servicio/conductor.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  conductor: Conductor = new Conductor();
  listVehiculo: Vehiculo[];
  listConductor: Conductor[];
  servicio: Servicio = new Servicio();
  constructor(private service: ServicioService, private router: Router,
              private serviceVehiculo: VehiculoService,
              private serviceConductor: ConductorService) { }

  ngOnInit() {
    this.listarConductor();
    this.listarVehiculo();
  }

  guardarServicio(servicio: Servicio) {
   
    this.servicio.conductor = this.conductor;
    this.servicio.vehiculo = this.vehiculo;
    servicio.vehiculo = this.obtenerVehiculoSeleccionado(servicio.vehiculo.idVehiculo);
    servicio.conductor = this.obtenerConductorSeleccionado(servicio.conductor.id);
    console.log('vehiculo ' + servicio.vehiculo);
    this.service.guardarServicio(servicio).subscribe(data => {
      alert('Se ha guardado Exitosamente');
      this.router.navigate(['listarServicio']);
    });
  }

  listarVehiculo() {
    this.serviceVehiculo.listarVehiculo().subscribe(data => this.listVehiculo = data);
  }

  listarConductor() {
    this.serviceConductor.listarConductor().subscribe(data => this.listConductor = data);
  }

  obtenerVehiculoSeleccionado(idSeleccionado: number): Vehiculo {
    console.log('id seleccionado: ' + idSeleccionado);
    return   this.listVehiculo.find(data => data.idVehiculo == idSeleccionado);
  }

  obtenerConductorSeleccionado(idSeleccionado: number): Conductor {
    console.log('conductorId: ' + idSeleccionado);
    return this.listConductor.find(data => data.id == idSeleccionado);
  }
}
