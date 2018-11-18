import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { AngularFireList } from '@angular/fire/database';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;
  products$;

  constructor(private productservice: ProductService) {
    this.products = this.productservice.getAll();
    this.products$ = this.products.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
   });


  }

  ngOnInit() {
  }

}
