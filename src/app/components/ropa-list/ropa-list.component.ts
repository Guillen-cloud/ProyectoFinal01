import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';
import { ropa } from '../../models/ropa.models';

@Component({
  selector: 'app-ropa-list',
  standalone: false,
  templateUrl: './ropa-list.component.html',
  styleUrls: ['./ropa-list.component.css']
})
export class RopaListComponent implements OnInit, OnDestroy {
  ropa: ropa[] = []; // Lista para ropa
  loadingRopa: boolean = false; // Estado de carga para ropa
  ropaSub: Subscription | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // Obtener ropa desde el archivo local o API
    this.loadingRopa = true; // Activar carga
    this.ropaSub = this.productoService.getRopa().subscribe({
      next: (ropa: ropa[]) => {
        this.ropa = ropa;
        console.log('Ropa:', this.ropa);
      },
      error: (err: any) => {
        console.error('Error al cargar ropa:', err);
      },
      complete: () => {
        this.loadingRopa = false; // Desactivar carga
        console.log('Ropa cargada correctamente');
      }
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse de la subscripción
    this.ropaSub?.unsubscribe();
  }
}
