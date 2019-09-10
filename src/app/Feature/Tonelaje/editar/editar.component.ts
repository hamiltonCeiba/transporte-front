import { Component, OnInit } from '@angular/core';
import { Tonelaje } from 'src/app/Core/Tonelaje';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio/servicio.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tonelaje: Tonelaje = new Tonelaje();
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit() {
    this.tonelajeSeleccionado();
  }

  actualizarTonelaje(tonelaje: Tonelaje) {
  this.service.actualizarTonelaje(tonelaje)
  .subscribe( data => {
      this.tonelaje = data;
      alert('Se ha actualizado correctamente');
      this.router.navigate(["listarTonelaje"]);
    } 
  )
  }

  tonelajeSeleccionado(){
    let idTonelaje = localStorage.getItem("id");
    this.service.obtenerTonelajePorId(+idTonelaje)
    .subscribe(data => {
      this.tonelaje = data;
    } )
  }
}
