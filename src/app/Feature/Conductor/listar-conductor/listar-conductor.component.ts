import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/Core/Conductor';
import { Router } from '@angular/router';
import { ConductorService } from '../servicio/conductor.service';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.component.html',
  styleUrls: ['./listar-conductor.component.css']
})
export class ListarConductorComponent implements OnInit {

  listConductor: Conductor[];
  constructor(private service: ConductorService, private router: Router ) { }

  ngOnInit() {
    this.service.listarConductor().subscribe(data => this.listConductor = data);
  }

  guardarConductor() {
    this.router.navigate(["agregarConductor"]);
  }

}
