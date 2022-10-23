import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class CategoryService {
  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof CategoryService
   */
  constructor(
    private http: HttpClient,
  ) { }

  success: any;

  error: any;
  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberof CategoryService
   */
  getCategory(): Observable<any[]> {
    return this.http
      .get<any[]>(`https://fakestoreapi.com/products/categories`)
      .pipe(map(resp => resp));
  }
}