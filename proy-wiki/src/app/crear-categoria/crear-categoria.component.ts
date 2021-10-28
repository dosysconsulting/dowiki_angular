import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  clasificacioncategoria = new FormControl ('');
  Caracteristicas = new FormControl ('');

  constructor() { }

  ngOnInit(): void {
  }

  guardarCategoria(){
    
  }

}
