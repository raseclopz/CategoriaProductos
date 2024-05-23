import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CategoriasComponent } from './categorias/categorias.component';

export const routes: Routes = [
    {
        path:'', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'operaciones', component: OperacionesComponent
    },
    {
        path: 'categorias', component: CategoriasComponent
    }
];
