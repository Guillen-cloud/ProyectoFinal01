import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.models';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl; // URL base de la API
  private ropaUrl: string = 'assets/data/ropa.json'; // Ruta al archivo local
 

  constructor(private http: HttpClient) { }

  // Método para obtener productos desde el servidor
  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.ApiUrl}`);
  }

  // Método para obtener ropa desde el archivo local
  getRopa(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.ropaUrl);
  }
}
