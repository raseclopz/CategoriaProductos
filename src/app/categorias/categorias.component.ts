import { Component } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent{
  titulo: string = 'Categorias';
  listadoDeCategorias: Categoria[] = [
    {idCategoria: 1, nombreCategoria: 'Deportes', descripcionCategoria: 'Artículos Deportivos'},
    {idCategoria: 2, nombreCategoria: 'Electrónica', descripcionCategoria: 'Artículos Electrónicos'},
    {idCategoria: 3, nombreCategoria: 'Línea Blanca', descripcionCategoria: 'Artículos de Línea Blanca'},
    {idCategoria: 4, nombreCategoria: 'Cómputo', descripcionCategoria: 'Artículos de Cómputo'},
    {idCategoria: 5, nombreCategoria: 'Ropa', descripcionCategoria: 'Artículos de Ropa'},
  ];

  update(): void {
    Swal.fire({
      title: "Actualizar",
      text: "Aquí va lo de actualizar",
      icon: "info"
    });
  }

  delete():void{
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
        Swal.fire({
          title: "Eliminado!",
          text: "El registro ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }


}
