import { Component, OnDestroy, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ArticuloService } from '../services/articulo.service';
import { Router } from '@angular/router';
import { formatDate } from "@angular/common";


@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  titulo = new FormControl('');
  categoria = new FormControl('');
  descripcion = new FormControl('');

  constructor(
    private ArticuloService: ArticuloService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    const body = {
      titulo: this.titulo.value,
      categoria: this.categoria.value,
      descripcion: this.descripcion.value,
    }
    
    this.ArticuloService.createArticulo(body).subscribe((res) => {
      this.router.navigate(['']);
    });
  }
  nuevacategoria (){
    

  }
  
}
