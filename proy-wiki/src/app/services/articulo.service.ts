import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
 
  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  createArticulo(body:any) {
    return this.http.post(this.endpoints.articulo(), body);
  }
  
  searchArticulo(body:any) {
    return this.http.get(this.endpoints.articulo(), body);
  }

}
