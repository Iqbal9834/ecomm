import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';
import { Observable } from 'rxjs';
import { ProductService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories$: Observable<any>

  constructor(private categoryService: CategoryService, private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategory()
  }
  selectCategory(category: any) {
    this.productService.updateCategory(category)
    this.route.navigate(["/product"])
    
  }

}
