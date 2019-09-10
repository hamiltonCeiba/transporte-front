import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio/servicio.service';
import { Tonelaje } from 'src/app/Core/Tonelaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tonelaje: Tonelaje = new Tonelaje();
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit() {
  }

  guardarTonelaje(rango: string, precio: number) {
    this.tonelaje.precio = precio;
    this.tonelaje.rango = rango;
    this.tonelaje.id = 0;
    this.service.guardarTonelaje(this.tonelaje).subscribe(data => {
      alert("Se ha guardado exitosamente");
      this.router.navigate(["listarTonelaje"]);
    });
  }

}
