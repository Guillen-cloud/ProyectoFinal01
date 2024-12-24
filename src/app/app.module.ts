import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RopaListComponent } from './components/ropa-list/ropa-list.component';
import { RopaItemComponent } from './components/ropa-item/ropa-item.component';
import { RopaComponent } from './components/ropa/ropa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    PaymentCardComponent,
    TecnologiaComponent,
    CarritoComponent,
    RopaListComponent,
    RopaItemComponent,
    RopaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
