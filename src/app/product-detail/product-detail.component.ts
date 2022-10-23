import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products$: Observable<any>

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct()
    this.route.queryParams.subscribe(params => {
      if (params.search) {
        this.products$ = this.products$.pipe(
          map(items => items.filter((item: any) => item.title.toLowerCase().includes(params.search))))

      }
    })
  }


  addToCart(count: any) {
    this.productService.cartCount(this.productService.count.getValue() + count)
  }


}
