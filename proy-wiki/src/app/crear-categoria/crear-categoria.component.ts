import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArticuloService } from '../services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  clasificacioncategoria = new FormControl ('');
  Caracteristicas = new FormControl ('');

  constructor(
    private ArticuloService: ArticuloService,
    private router: Router,
  ) { } 

  ngOnInit(): void {
  }

  guardarCategoria(){
    const body = {
      clasificacioncategoria: this.clasificacioncategoria.value,
      Caracteristicas: this.Caracteristicas.value,
    }
    
    this.ArticuloService.guardarCategoria(body).subscribe((res) => {
      this.router.navigate(['']);
    });
  }

}
