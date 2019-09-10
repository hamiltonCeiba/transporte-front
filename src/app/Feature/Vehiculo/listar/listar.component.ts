import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Core/Vehiculo';
import { VehiculoService } from '../servicio/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listVehiculo: Vehiculo[];
  constructor(private service: VehiculoService, private route: Router) { }

  ngOnInit() {
    this.service.listarTonelaje()
    .subscribe(data => {
      this.listVehiculo = data;
    });
  }

}
