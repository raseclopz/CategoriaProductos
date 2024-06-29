import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
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
      console.log('Categorías cargadas:', this.listadoDeCategorias);
    }, error => {
      console.error('Error al cargar categorías:', error);
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
        this.categoriaService.eliminarCategoria(categoria.id).subscribe(() => {
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
