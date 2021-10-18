import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { NgxEditorModule } from 'ngx-editor';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    CrearArticuloComponent,
    CrearCategoriaComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent
  ]


})
export class AppModule { }
