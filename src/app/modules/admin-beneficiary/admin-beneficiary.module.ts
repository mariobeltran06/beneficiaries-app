import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { AdminBeneficiaryRoutingModule } from './admin-beneficiary-routing.module';
import { LayoutTableComponent } from './components/layout-table/layout-table.component';
import { TableBeneficiariesComponent } from './components/table-beneficiaries/table-beneficiaries.component';
import { BeneficiariesPageComponent } from './pages/beneficiaries-page/beneficiaries-page.component';

const THEME_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    BeneficiariesPageComponent,
    LayoutTableComponent,
    TableBeneficiariesComponent,
  ],
  imports: [CommonModule, AdminBeneficiaryRoutingModule, ...THEME_MATERIAL],
})
export class AdminBeneficiaryModule {}
