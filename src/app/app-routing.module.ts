import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [
  {
    path: 'product',
    component: ProductDetailComponent,
  },
  {
    path: 'category',
    component: CategoryComponent
  },
 
  {
    path: '**',
    // component: SimpleComponent,
    redirectTo: "product"
  },
  // {
  //   path: "**",
  //   redirectTo: 'V1/upload'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
{

      useHash: false,
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
