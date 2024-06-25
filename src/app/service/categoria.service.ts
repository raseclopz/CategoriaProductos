import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint: string = 'http://localhost:8080/apiCategorias/categorias';
  private httpheaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  )

  constructor(private http: HttpClient) { }

  mostrarCategorias(): Observable<Categoria[]>{
    return this.http.get(this.endPoint).pipe(map(response => response as Categoria[]));
  }

  mostrarCategoria(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.endPoint}/${id}`);
  }

  crearCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.endPoint, categoria, {headers: this.httpheaders});
  }

  eliminarCategoria(id: number):Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.endPoint}/${id}`,{headers: this.httpheaders});
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.endPoint}/${categoria.idCategoria}`, categoria, {headers: this.httpheaders});
  }
}
