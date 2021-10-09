import { Component, Input, OnInit } from '@angular/core';
import { CrearArticuloComponent } from '../crear-articulo/crear-articulo.component';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {



  constructor() { 
    CrearArticuloComponent
  }

  ngOnInit(): void {
  }

}
