import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/Core/Conductor';
import { ConductorService } from '../servicio/conductor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class CrearConductorComponent implements OnInit {

  conductor: Conductor = new Conductor();
  constructor(private service: ConductorService, private router: Router) { }

  ngOnInit() {
  }

  guardarConductor(conductor: Conductor) {
    this.service.guardarConductor(conductor).subscribe(data => {
      alert('Se ha guardado exitosamente');
      this.router.navigate(['listarConductor']);
    });
  }

}
