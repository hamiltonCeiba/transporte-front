import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { Router } from '@angular/router';
import { VehiculoService } from '../servicio/vehiculo.service';
import { Tonelaje } from 'src/app/Core/Tonelaje';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  listTonelaje: Tonelaje[];
  tonelaje: Tonelaje = new Tonelaje();
  constructor(private router: Router, private service: VehiculoService) { }

  ngOnInit() {
    this.service.listarTonelaje().subscribe(data => this.listTonelaje = data);
    this.vehiculoSeleccionado();
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    console.log(vehiculo);
    this.vehiculo.tonelaje = this.tonelaje;
    console.log(vehiculo);
    this.service.actualizarVehiculo(vehiculo)
    .subscribe( data => {
        this.vehiculo = data;
        alert('Se ha actualizado correctamente');
        this.router.navigate(["listarVehiculo"]);
      } );
  }

  vehiculoSeleccionado(){
    let idvehiculo = localStorage.getItem("id");
    this.service.obtenerVehiculoPorId(+idvehiculo)
    .subscribe(data => {
      this.vehiculo = data;
    } );
  }


}
