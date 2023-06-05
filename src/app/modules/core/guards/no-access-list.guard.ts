import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { getAllBeneficiaries } from 'src/app/store/selectors/beneficiary.selectors';
import { IAppState } from 'src/app/store/states/app.states';
import { select, Store } from '@ngrx/store';
import { IBeneficiary } from '../../register-beneficiary/interfaces/beneficiary.interface';

@Injectable()
export class NoAccessListGuard implements CanActivate {
  constructor(private store: Store<IAppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(getAllBeneficiaries)).pipe(
      map((beneficiaries: IBeneficiary[] | null) => {
        if (beneficiaries) {
          return true;
        } else {
          this.router.navigate(['registro-beneficiarios']);
          return false;
        }
      })
    );
  }
}
