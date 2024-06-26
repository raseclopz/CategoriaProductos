import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.pord';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint: string = `${environment.apiUrl}/categorias`;
  private httpheaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  mostrarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.endPoint);
  }

  mostrarCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.endPoint}/${id}`);
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.endPoint, categoria, { headers: this.httpheaders });
  }

  eliminarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/${id}`, { headers: this.httpheaders });
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.endPoint}/${categoria.id}`, categoria, { headers: this.httpheaders });
  }
}
