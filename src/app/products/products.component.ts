import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'app/product.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import { Product } from 'app/models/product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'app/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  suscription: Subscription ;
  filteredProducts: Product[] = [];
  category: string;
  categories$;
  categories;


  constructor(private productservice: ProductService, route: ActivatedRoute, categoryService: CategoryService) {
    this.suscription = this.productservice.getAll().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).switchMap(p => {
      this.products = p;
      return route.queryParamMap;
    })
    .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          // tslint:disable-next-line:no-shadowed-variable
          this.products.filter( p => p.category === this.category) :
          this.products;
      });

        this.categories = categoryService.getCategories();
        this.categories$ = this.categories.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
         });
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

}
