import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category.service';
import { ProductService } from 'app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  categories;
  _product;

  Product;

  constructor(private router: Router, private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService) {
    this.categories = categoryService.getCategories();
    this.categories$ = this.categories.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
     });


     const param_id = this.route.snapshot.paramMap.get('id');
     if (param_id) {
     this._product = this.productService.get(param_id);
     this._product.snapshotChanges().map(changes => {
           return changes.map(c => ({
           key: c.payload.key, ...c.payload.val()}
         ));
       })
       .subscribe(res => this.Product = res);
      }

    }




  save(product) {
   this.productService.create(product);
   this.router.navigate(['admin/products']);
   }

   ngOnInit() {

  }

}
