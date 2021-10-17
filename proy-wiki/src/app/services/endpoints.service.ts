import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
 
  url = 'http://127.0.0.1:8000/api/';
  constructor(
      private globalService: GlobalService
  ) { }
  //articulo
  articulo() {
    return this.globalService.apiHost + 'wiki/articulo/';
  }

}