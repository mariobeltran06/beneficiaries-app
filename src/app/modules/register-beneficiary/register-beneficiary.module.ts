import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBeneficiaryComponent } from './components/form-beneficiary/form-beneficiary.component';
import { LayoutFormComponent } from './components/layout-form/layout-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterBeneficiaryRoutingModule } from './register-beneficiary-routing.module';

const THEME_MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    RegisterPageComponent,
    LayoutFormComponent,
    FormBeneficiaryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterBeneficiaryRoutingModule,
    ...THEME_MATERIAL,
  ],
})
export class RegisterBeneficiaryModule {}
