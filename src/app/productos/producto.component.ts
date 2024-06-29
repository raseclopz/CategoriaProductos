import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/Producto';
import { ProductoService } from '../service/producto.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../productos/producto.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule] // Importar CommonModule, RouterModule, y FormsModule aquí
})
export class ProductosComponent implements OnInit {
  titulo: string = 'Productos';
  listadoDeProductos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    console.log('Cargando productos...'); // Mensaje de depuración
    this.productoService.mostrarProductos().subscribe(productos => {
      this.listadoDeProductos = productos;
      console.log('Productos cargados en el componente:', this.listadoDeProductos); // Mensaje de depuración
    }, error => {
      console.error('Error al cargar productos:', error); // Mensaje de depuración
    });
  }

  delete(producto: Producto): void {
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
        this.productoService.eliminarProducto(producto.idProducto).subscribe(() => {
          this.cargarProductos();
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
