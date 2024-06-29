import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../model/Producto';
import Swal from 'sweetalert2';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Importar CommonModule y FormsModule aquí
})
export class ProductoFormComponent implements OnInit {
  titulo: string = "Datos del Producto";
  producto: Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mostrarProducto();
  }

  registrarProducto(): void {
    this.productoService.crearProducto(this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
      Swal.fire({
        title: "Registro exitoso",
        text: "El producto se registró correctamente",
        icon: "success"
      });
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar el producto",
        icon: "error"
      });
    });
  }

  actualizarProducto(): void {
    this.productoService.actualizarProducto(this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
      Swal.fire({
        title: "Actualización exitosa",
        text: "El producto se actualizó correctamente",
        icon: "success"
      });
    }, error => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar el producto",
        icon: "error"
      });
    });
  }

  mostrarProducto(): void {
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.productoService.mostrarProducto(id).subscribe(
            (producto) => this.producto = producto
          );
        }
      }
    );
  }
}
