import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutFormComponent } from './components/layout-form/layout-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterBeneficiaryRoutingModule } from './register-beneficiary-routing.module';
import { FormBeneficiaryComponent } from './components/form-beneficiary/form-beneficiary.component';

const THEME_MATERIAL = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [RegisterPageComponent, LayoutFormComponent, FormBeneficiaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterBeneficiaryRoutingModule,
    ...THEME_MATERIAL,
  ],
})
export class RegisterBeneficiaryModule {}
