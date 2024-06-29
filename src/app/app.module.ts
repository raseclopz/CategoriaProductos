import { Component, OnInit } from '@angular/core';
import { Categoria } from '../app/model/Categoria';
import { CategoriaService } from '../app/service/categoria.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-categorias',
  templateUrl: '../app/categorias/categorias.component.html',
  styleUrls: ['../app/categorias/categorias.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule] // Importar RouterModule y FormsModule aquí
})
export class CategoriasComponent implements OnInit {
  titulo: string = 'Categorias';
  listadoDeCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.mostrarCategorias().subscribe(categorias => {
      this.listadoDeCategorias = categorias;
      console.log('Categorías cargadas:', this.listadoDeCategorias); // Agregar para depuración
    }, error => {
      console.error('Error al cargar categorías:', error); // Agregar para depuración
    });
  }

  update(): void {
    Swal.fire({
      title: "Actualizar",
      text: "Aquí va lo de actualizar",
      icon: "info"
    });
  }

  delete(categoria: Categoria): void {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe(() => {
          this.cargarCategorias();
        });
        Swal.fire({
          title: "Eliminado!",
          text: "El registro ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }
}
