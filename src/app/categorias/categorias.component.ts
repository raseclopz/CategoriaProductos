import { Component, OnInit, inject } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CategoriaService } from '../service/categoria.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  titulo: string = 'Categorias';
  listadoDeCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { };
  httpClient = inject(HttpClient);

  ngOnInit(): void {
      this.categoriaService.mostrarCategorias().subscribe(
        (lascategorias) => this.listadoDeCategorias = lascategorias
      );
  };

  update(): void {
    Swal.fire({
      title: "Actualizar",
      text: "Aquí va lo de actualizar",
      icon: "info"
    });
  }

  delete(categoria : Categoria):void{
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
        this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe((response) => this.categoriaService.mostrarCategorias().subscribe((lasCategorias) => (this.listadoDeCategorias = lasCategorias)));
        Swal.fire({
          title: "Eliminado!",
          text: "El registro ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }


}
