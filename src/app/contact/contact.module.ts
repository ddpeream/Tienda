import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ContactRoutingModule
  ]
})
export class ContactModule {

}
