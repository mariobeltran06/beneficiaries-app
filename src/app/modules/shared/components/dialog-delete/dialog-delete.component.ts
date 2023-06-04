import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IDataDeleteDialog } from '../../interfaces/data-delete-dialog.interface';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class DialogDeleteComponent {
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDataDeleteDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDeleteComponent>
  ) {
    this.form = this.formBuilder.group({
      word: [''],
    });
  }

  sendAction(): void {
    if (this.form.valid) this.dialogRef.close(true);
  }
}
