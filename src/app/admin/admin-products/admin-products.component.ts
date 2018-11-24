import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'app/product.service';
import { AngularFireList } from '@angular/fire/database';
import { Product } from 'app/models/product';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource} from 'angular5-data-table'


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  products: Product[];
  filteredProducts: any[];
  tableResource: DataTableResource<Product>;
  items: Product[];
  itemcount: number;

  constructor(private productservice: ProductService) {

    this.suscription = this.productservice.getAll().snapshotChanges().pipe(map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
   })).subscribe(p => {
     this.filteredProducts = this.products = p;
     this.initilizeTable( p );
    });
  }

  private initilizeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset : 0 })
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemcount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) { return; }
    this.tableResource.query(params).
    then(items => this.items = items);
  }

  filter(query: string) {
   this.filteredProducts = (query) ?
   this.products.filter(p => p.title.toLowerCase().includes( query.toLowerCase())) : this.products;
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.suscription.unsubscribe();

  }

}
