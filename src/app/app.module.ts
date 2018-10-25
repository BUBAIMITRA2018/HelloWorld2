
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { Server } from 'selenium-webdriver/safari';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    HomeComponent,
    AdminOrdersComponent,
    LogInComponent,
      
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'products',component:ProductsComponent},
      {path:'my/orders',component:MyOrdersComponent},
      {path:'check-out',component:CheckOutComponent},
      {path:'order-success',component:OrderSucessComponent},
      {path:'login',component:LogInComponent},
      {path:'admin/products',component:AdminProductsComponent},
      {path:'admin/orders',component:AdminOrdersComponent},

      





    ])
 
    
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
