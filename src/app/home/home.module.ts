import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './home/home.component';

import {HomeRoutingModule} from './home-routing.module'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }