import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'operaciones', component: OperacionesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categoriaForm', component: CategoriaFormComponent },
  { path: 'categoriaForm/:id', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
