import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './componentes/product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './componentes/nav/nav.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { FormproductComponent } from './componentes/formproduct/formproduct.component';
import{ProductEditComponent} from './componentes/product-edit/product-edit.component'

@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TablaComponent, 
    DashboardComponent, 
    ProductListComponent,
    FormproductComponent,
    ProductEditComponent
  ],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
