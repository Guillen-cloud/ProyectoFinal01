import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ropa } from '../../models/ropa.models';  // Asegúrate de tener un modelo adecuado para 'Ropa'
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-ropa',
  standalone: false,
  
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit, OnDestroy {

  slug: string | undefined;
  ropa: ropa | undefined;  // Aquí estamos usando 'ropa' en lugar de 'producto'
  ropaSub: Subscription | undefined;

  galeria: Array<any> = [];
  renderGaleria: Boolean = true;
  currentImg: string | undefined;

  constructor(private route: ActivatedRoute, private productoServices: ProductoService) {}

  ngOnInit(): void {
    // Obtener el 'slug' de la URL
    this.slug = this.route.snapshot.params['id'];
    
    // Suscripción para obtener la ropa
    this.ropaSub = this.productoServices.getRopa().subscribe({
      next: (ropas: ropa[]) => {
        // Filtrar ropa por slug
        this.ropa = ropas.filter(r => r.slug === this.slug)[0];
        
        // Establecer la imagen inicial si la ropa tiene imágenes
        if (this.ropa && this.ropa.imageUrl && this.ropa.imageUrl.length > 0) {
          this.currentImg = this.ropa.imageUrl[0];
        }
      },
      error: (err: any) => {
        console.error('Error al cargar la ropa:', err);
      }
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse de la suscripción cuando el componente se destruye
    this.ropaSub?.unsubscribe();
  }

  handleChangeImg(itemImg: string): void {
    // Cambiar la imagen mostrada cuando se selecciona una imagen diferente
    this.currentImg = itemImg;
  }
}
