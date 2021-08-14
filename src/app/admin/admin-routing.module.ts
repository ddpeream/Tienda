import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FormproductComponent } from './componentes/formproduct/formproduct.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ProductEditComponent } from './componentes/product-edit/product-edit.component';
import { ProductFormComponent } from './componentes/product-form/product-form.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'tabla',
        component: TablaComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: FormproductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
