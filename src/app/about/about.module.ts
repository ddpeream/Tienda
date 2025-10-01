import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule
  ]
})
export class AboutModule { }
