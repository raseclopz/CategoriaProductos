import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../model/Producto';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./producto.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule] // Importar RouterModule y FormsModule aquí
})
export class ProductosComponent implements OnInit {
  titulo: string = 'Productos';
  listadoDeProductos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.mostrarProductos().subscribe((productos: any[]) => {
      this.listadoDeProductos = productos.map(p => ({
        idProducto: p.id,
        nombreProducto: p.nombre,
        descripcionProducto: p.descripcion,
        precioProducto: p.precio,
        categoriaId: p.categoriaid
      }));
      console.log('Productos cargados en el componente:', this.listadoDeProductos); // Agregar para depuración
    }, error => {
      console.error('Error al cargar productos:', error); // Agregar para depuración
    });
  }

  update(): void {
    Swal.fire({
      title: "Actualizar",
      text: "Aquí va lo de actualizar",
      icon: "info"
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
