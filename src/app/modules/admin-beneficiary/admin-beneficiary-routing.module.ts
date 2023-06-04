import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesPageComponent } from './pages/beneficiaries-page/beneficiaries-page.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBeneficiaryRoutingModule { }
