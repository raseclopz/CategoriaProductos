
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private endPoint: string = 'http://localhost:3000/apiProductos/productos';
  private httpheaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  )

  constructor(private http: HttpClient) { }

  mostrarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.endPoint).pipe(
      map(response => {
        console.log('Productos obtenidos del servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  mostrarProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint}/${id}`).pipe(
      map(response => {
        console.log('Producto obtenido del servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.endPoint, producto, { headers: this.httpheaders }).pipe(
      map(response => {
        console.log('Producto creado en el servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }

  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/${id}`, { headers: this.httpheaders }).pipe(
      map(() => {
        console.log('Producto eliminado en el servidor con ID:', id); // Mensaje de depuración
      })
    );
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.endPoint}/${producto.idProducto}`, producto, { headers: this.httpheaders }).pipe(
      map(response => {
        console.log('Producto actualizado en el servidor:', response); // Mensaje de depuración
        return response;
      })
    );
  }
}
