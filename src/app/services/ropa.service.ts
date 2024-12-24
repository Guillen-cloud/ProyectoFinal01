import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiServer } from '../apiServer';
import { ropa } from '../models/ropa.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl; // URL base de la API
 

  constructor(private http: HttpClient) { }

  // Método para obtener productos desde el servidor
  getProducto(): Observable<ropa[]> {
    return this.http.get<ropa[]>(`${this.ApiUrl}`);
  }

  
}
