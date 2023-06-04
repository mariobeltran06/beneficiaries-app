import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBeneficiary } from 'src/app/modules/register-beneficiary/interfaces/beneficiary.interface';
import { getAllBeneficiaries } from 'src/app/store/selectors/beneficiary.selectors';
import { IAppState } from 'src/app/store/states/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table-beneficiaries',
  templateUrl: './table-beneficiaries.component.html',
  styleUrls: ['./table-beneficiaries.component.scss'],
})
export class TableBeneficiariesComponent {
  displayedColumns = ['fullname', 'relationship', 'porcentage'];
  dataSource: IBeneficiary[] = [];

  constructor(private store: Store<IAppState>) {
    this.store
      .select(getAllBeneficiaries)
      .pipe(takeUntilDestroyed())
      .subscribe(
        (data: IBeneficiary[] | null) => (this.dataSource = data ? data : [])
      );
  }
}
