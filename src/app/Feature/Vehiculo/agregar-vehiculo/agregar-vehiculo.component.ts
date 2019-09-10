import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { VehiculoService } from '../servicio/vehiculo.service';
import { Router } from '@angular/router';
import { Tonelaje } from 'src/app/Core/Tonelaje';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  tonelaje: Tonelaje = new Tonelaje();
  listTonelaje: Tonelaje[];

  public capturarOption : string ="tonelada";

  constructor(private service: VehiculoService, private router: Router) {}

  ngOnInit() {
    this.listarTonelaje();
  }

  guardarVehiculo(vehiculo: Vehiculo) {
    this.tonelaje.precio = 0.0;
    this.tonelaje.rango = "";
  console.log(this.vehiculo.tonelaje);
    this.service.guardarVehiculo(vehiculo).subscribe(data => {
      alert("Se ha guardado exitosamente");
      this.router.navigate(['listarVehiculo']);
    });
  }

  listarTonelaje(){
    this.service.listarTonelaje().subscribe(data => this.listTonelaje = data);
  }

}
