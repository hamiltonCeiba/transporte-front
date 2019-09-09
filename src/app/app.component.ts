import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transporte-angular';

  constructor(private router:Router){}

  listarTonelaje() {
    this.router.navigate(["listarTonelaje"]);
  }

  agregarTonelaje(){
    this.router.navigate(["agregarTonelaje"]);
  }

}
