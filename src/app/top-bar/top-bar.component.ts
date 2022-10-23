import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public avtar: any;
  public cartCount: Number;
  public search: any;

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.avtar = "https://robohash.org/" + Math.floor((Math.random() * 6) + 1);
  }
  ngDoCheck() {
    this.cartCount = this.productService.count.getValue()
  }
  searchByTitle() {

    const queryParams: Params = { search: this.search };

    this.route.navigate([window.location.pathname], { queryParams: queryParams })
  }

}
