import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio/servicio.service';
import { Tonelaje } from 'src/app/Core/Tonelaje';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listTonelaje: Tonelaje[];

  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit() {
    this.service.listarTonelaje().subscribe(data => this.listTonelaje = data);
  }

  editarTonelaje(tonelaje: Tonelaje): void {
    localStorage.setItem( "id" , tonelaje.id.toString());
    this.router.navigate(["editarTonelaje"]);
  }

  eliminarTonelaje(tonelaje: Tonelaje) {
    console.log(tonelaje);
    this.service.eliminarTonelaje(tonelaje)
    .subscribe(data =>{
      this.listTonelaje = this.listTonelaje.filter(tonelada => tonelada !== tonelaje);
    })
  }

  listarTonelaje() {
    this.router.navigate(["listarTonelaje"]);
  }

  agregarTonelaje(){
    this.router.navigate(["agregarTonelaje"]);
  }

}
