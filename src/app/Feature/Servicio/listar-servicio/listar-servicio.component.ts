import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/Core/Servicio';
import { ServicioService } from '../../Servicio/servicio/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.css']
})
export class ListarServicioComponent implements OnInit {

  listServicio: Servicio[];
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit() {
    this.service.listarServicio().subscribe(data => this.listServicio = data);
  }

  guardarServicio() {

  }

}
