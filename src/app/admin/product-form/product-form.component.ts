import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category.service';
import { ProductService } from 'app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  categories;
  product = {};
  id;

  constructor(private router: Router, private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService) {
    this.categories = categoryService.getCategories();
    this.categories$ = this.categories.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
     });


    //  const param_id = this.route.snapshot.paramMap.get('id');
    //  if (param_id) {
    //  this._product = this.productService.get(param_id).
    //  this._product.snapshotChanges().map(changes => {
    //        return changes.map(c => ({
    //        key: c.payload.key, ...c.payload.val()}
    //      ));
    //    })
    //    .subscribe(res => this.Product = res);
    //   }

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
       this.productService.get(this.id).snapshotChanges().pipe(map(changes => {
        return changes.payload.val() })).subscribe(p => this.product = p);

    }
  }


  save(product) {
   if (this.id) {this.productService.update(this.id, product); } else { this.productService.create(product); }

   this.router.navigate(['admin/products']);
   }

   delete() {
    if (!confirm('Are you sure you want to delete this product?')) {
      return ;
     }

     this.productService.delete(this.id);
     this.router.navigate(['/admin/products']);

   }

   ngOnInit() {






      }
    }

