

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private category = new BehaviorSubject("")
  public count = new BehaviorSubject(0)
  public title = new BehaviorSubject("")
  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  success: any;

  error: any;
  /**
   *
   *
   * @returns {Observable<Product>}
   *
   * @memberof ProductService
   */
  getProduct(): Observable<Product[]> {
    if (this.category.getValue() == "") {
      this.route.navigate(['category'])
    }
    return this.http
      .get<Product[]>(`https://fakestoreapi.com/products/category/${this.category.getValue()}`)
      .pipe(map(resp => resp));
  }
  updateCategory(name: string) {
    this.category.next(name)
  }
  cartCount(count: any) {
    this.count.next(count)
  }
  updateSearch(title: string){
    this.title.next(title)
  }
}