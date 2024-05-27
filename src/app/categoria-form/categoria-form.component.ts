import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../model/Categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent {
  titulo:string="Datos de la Categoría";
  categoria:Categoria = new Categoria();
  registrarCategoria():void{
Swal.fire({
  title: "Actualizando categoría",
  text: "La categoría se actualizó correctamente",
  icon: "question"
});
  };
  actualizarCategoria():void{
    Swal.fire("Yo podré actualizar una categoría")
  };
}
