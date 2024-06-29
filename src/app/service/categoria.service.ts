import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint: string = 'http://localhost:3000/apiCategorias/categorias';
  private httpheaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  )

  constructor(private http: HttpClient) { }

  mostrarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.endPoint).pipe(
      map(response => {
        console.log('Categorías obtenidas del servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  mostrarCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.endPoint}/${id}`).pipe(
      map(response => {
        console.log('Categoría obtenida del servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.endPoint, categoria, { headers: this.httpheaders }).pipe(
      map(response => {
        console.log('Categoría creada en el servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  eliminarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/${id}`, { headers: this.httpheaders }).pipe(
      map(() => {
        console.log('Categoría eliminada en el servidor con ID:', id); // Mensaje de depuración
      })
    );
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.endPoint}/${categoria.idCategoria}`, categoria, { headers: this.httpheaders }).pipe(
      map(response => {
        console.log('Categoría actualizada en el servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }
}
