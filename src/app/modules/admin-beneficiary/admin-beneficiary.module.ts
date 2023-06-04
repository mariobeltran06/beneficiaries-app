import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminBeneficiaryRoutingModule } from './admin-beneficiary-routing.module';
import { BeneficiariesPageComponent } from './pages/beneficiaries-page/beneficiaries-page.component';

@NgModule({
  declarations: [
    BeneficiariesPageComponent
  ],
  imports: [
    CommonModule,
    AdminBeneficiaryRoutingModule
  ]
})
export class AdminBeneficiaryModule { }
