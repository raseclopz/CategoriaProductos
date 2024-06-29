import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { ProductosComponent } from './productos/producto.component';
import { ProductoFormComponent } from './productos-form/producto-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'operaciones', component: OperacionesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categoriaForm', component: CategoriaFormComponent },
  { path: 'categoriaForm/:id', component: CategoriaFormComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productoForm', component: ProductoFormComponent },
  { path: 'productoForm/:id', component: ProductoFormComponent }
];
