
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from 'environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { FormsModule} from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';

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
    ProductFormComponent,
    ProductFilterComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success', component: OrderSucessComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LogInComponent},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},

    ])

  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
