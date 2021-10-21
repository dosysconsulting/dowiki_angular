import { Component, Input, OnInit } from '@angular/core';
import { CrearArticuloComponent } from '../crear-articulo/crear-articulo.component';
import { ArticuloService } from '../services/articulo.service';
import { Articulo } from '../models/articulo';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {
  listArticulo: any;
  filterArticulo : any = { titulo: ''};
  constructor(private ArticuloService: ArticuloService,
    private filterPipe: FilterPipe) { 
    CrearArticuloComponent
  }

  ngOnInit(): void {
  }

  search(){
    const body ={
    }
    this.ArticuloService.searchArticulo(body).subscribe((data)=>{
      console.log(data)
      this.listArticulo=data;
      console.log(this.listArticulo)
    })
  }

  limpiar(){
    this.listArticulo = [];
  }

}
