import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../model/Categoria';
import Swal from 'sweetalert2';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent implements OnInit{

  titulo:string="Datos de la Categoría";
  categoria:Categoria = new Categoria();

  constructor(
    private categoriaService : CategoriaService, 
    private router:Router,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
      this.mostrarCategoria();
  }

  registrarCategoria():void{
    this.categoriaService.crearCategoria(this.categoria).subscribe(
      Response => this.router.navigate(['/categorias'])
    );
    Swal.fire({
      title: "Registro exitoso",
      text: "La categoría se registró correctamente",
      icon: "success"
    });
  };

  actualizarCategoria():void{
    this.categoriaService.actualizarCategoria(this.categoria).subscribe(
      Response => this.router.navigate(['/categorias'])
    );
    Swal.fire({
      title: "Actualización exitosa",
      text: "La categoría se actualizó correctamente",
      icon: "success"
    });
  };

  mostrarCategoria():void{
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id'];
        if(id){
          this.categoriaService.mostrarCategoria(id).subscribe(
            (categoria) => this.categoria = categoria
          );
        }
      }
    );
  }


}
