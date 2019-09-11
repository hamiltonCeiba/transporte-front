import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { VehiculoService } from '../servicio/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  listVehiculo: Vehiculo [];
  constructor(private service: VehiculoService, private router: Router) { }

  ngOnInit() {
    this.service.listarVehiculo().subscribe(data => this.listVehiculo = data);
  }

  guardarVehiculo(){
    this.router.navigate(["agregarVehiculo"]);
  }

  editarVehiculo(vehiculo: Vehiculo): void {
    console.log(vehiculo.idVehiculo);
    console.log(vehiculo);
    localStorage.setItem( "id" , vehiculo.idVehiculo.toString());
    this.router.navigate(["editarVehiculo"]);
  }

  eliminarVehiculo(vehiculo: Vehiculo){
    this.service.eliminarVehiculo(vehiculo)
    .subscribe(data => {
      this.listVehiculo = this.listVehiculo.filter(car => car !== vehiculo);
    } );
  }
}
