import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './components/stores/stores.component';
import { StoresRoutingModule } from './stores-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    MaterialModule
  ]
})
export class StoresModule { }
