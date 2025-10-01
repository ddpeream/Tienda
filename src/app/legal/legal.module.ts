import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { LegalRoutingModule } from './legal-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    TermsComponent,
    PrivacyComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    MaterialModule
  ]
})
export class LegalModule { }
