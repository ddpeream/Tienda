import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ProductComponent } from './componentes/product/product.component';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';
import { ProductsComponent } from './componentes/products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],

  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedModule
  ]
  
})
export class ProductModule { }
