import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DialogDeleteComponent } from 'src/app/modules/shared/components/dialog-delete/dialog-delete.component';
import { IDataDeleteDialog } from 'src/app/modules/shared/interfaces/data-delete-dialog.interface';
import { removeData } from 'src/app/store/actions/register-beneficiary.actions';
import { IAppState } from 'src/app/store/states/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout-table',
  templateUrl: './layout-table.component.html',
  styleUrls: ['./layout-table.component.scss'],
})
export class LayoutTableComponent {
  protected destroy$: Subject<boolean> = new Subject();

  constructor(
    public dialog: MatDialog,
    private store: Store<IAppState>,
    private router: Router
  ) {}

  replaceBeneficiaries(): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '515px',
      data: {
        title: 'Reemplazar Beneficiarios',
        variable: 'Beneficiarios',
        icon: 'group_remove',
      } as IDataDeleteDialog,
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: boolean | undefined) => {
        if (result) {
          this.store.dispatch(removeData());
          this.router.navigate(['registro-beneficiarios']);
        }
      });
  }

  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
