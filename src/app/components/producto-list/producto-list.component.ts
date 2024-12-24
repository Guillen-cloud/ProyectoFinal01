import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  standalone: false,
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy {
  productos: Producto[] = []; // Lista para productos

  productoSub: Subscription | undefined;
  

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // Obtener productos desde la API
    this.productoSub = this.productoService.getProducto().subscribe({
      next: (productos: Producto[]) => {
        this.productos = productos;
        console.log('Productos:', this.productos);
      },
      error: (err: any) => {
        console.error('Error al cargar productos:', err);
      },
      complete: () => {
        console.log('Productos cargados correctamente');
      }
    });

  }

  ngOnDestroy(): void {
    // Desuscribirse de ambas subscripciones
    this.productoSub?.unsubscribe();
   
  }
}
