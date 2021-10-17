import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  apiHost = '/api/';
  httpHeaders = {'Content-Type': 'application/json'};

  headers() {
    const token = this.getToken();
    if (token !== '') {
      //this.httpHeaders['Authorization'] = 'Token ' + token;
      localStorage.setItem("token",this.getToken())
    }
    return new HttpHeaders(this.httpHeaders);
  }

  setToken(token: string) {
    this.cookieService.set('ATN', token);
  }

  isAuthenticated() {
    const token = this.getToken();
    return token === '' ? false : true;
  }

  getToken() {
    return this.cookieService.get('ATN');
  }

  destroyToken(){
    this.cookieService.set('ATN', '');
  }
}
