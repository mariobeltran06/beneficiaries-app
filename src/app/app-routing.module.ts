import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAccessListGuard } from './modules/core/guards/no-access-list.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro-beneficiarios',
    pathMatch: 'full',
  },
  {
    path: 'registro-beneficiarios',
    loadChildren: () =>
      import('./modules/register-beneficiary/register-beneficiary.module').then(
        m => m.RegisterBeneficiaryModule
      ),
  },
  {
    path: 'lista-beneficiarios',
    canActivate: [NoAccessListGuard],
    loadChildren: () =>
      import('./modules/admin-beneficiary/admin-beneficiary.module').then(
        m => m.AdminBeneficiaryModule
      ),
  },
  {
    path: '**',
    redirectTo: 'registro-beneficiarios',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NoAccessListGuard],
})
export class AppRoutingModule {}
