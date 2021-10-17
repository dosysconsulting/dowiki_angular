import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

const routes: Routes = [
{path: 'crear-articulo',component:CrearArticuloComponent},
{path: '',component:PantallaPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
