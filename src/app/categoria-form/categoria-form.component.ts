import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import Swal from 'sweetalert2';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Importar CommonModule y FormsModule aquí
})
export class CategoriaFormComponent implements OnInit {
  titulo: string = "Datos de la Categoría";
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mostrarCategoria();
  }

  registrarCategoria(): void {
    console.log('Datos de la categoría antes de enviar:', this.categoria); // Agregar mensaje de depuración
    this.categoriaService.crearCategoria(this.categoria).subscribe(() => {
      this.router.navigate(['/categorias']);
      Swal.fire({
        title: "Registro exitoso",
        text: "La categoría se registró correctamente",
        icon: "success"
      });
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar la categoría",
        icon: "error"
      });
      console.error('Error al crear la categoría:', error); // Agregar mensaje de depuración
    });
  }

  actualizarCategoria(): void {
    this.categoriaService.actualizarCategoria(this.categoria).subscribe(() => {
      this.router.navigate(['/categorias']);
      Swal.fire({
        title: "Actualización exitosa",
        text: "La categoría se actualizó correctamente",
        icon: "success"
      });
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar la categoría",
        icon: "error"
      });
      console.error('Error al actualizar la categoría:', error); // Agregar mensaje de depuración
    });
  }

  mostrarCategoria(): void {
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.categoriaService.mostrarCategoria(id).subscribe(
            (categoria) => this.categoria = categoria
          );
        }
      }
    );
  }
}
