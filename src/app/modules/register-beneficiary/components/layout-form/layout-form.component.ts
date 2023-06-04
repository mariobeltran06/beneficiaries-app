import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.scss'],
})
export class LayoutFormComponent {
  layoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.layoutForm = this.formBuilder.group({
      beneficiaries: this.formBuilder.array([]),
    });
  }

  get beneficiaries(): FormArray {
    return this.layoutForm.get('beneficiaries') as FormArray;
  }

  addBeneficiary() : void {
    const beneficiaryFormGroup = this.formBuilder.nonNullable.group({
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      relationship: ['', [Validators.required]],
      percentage: [
        1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
    this.beneficiaries.push(beneficiaryFormGroup);
  }

  removeBeneficiary(index: number) : void {
    this.beneficiaries.removeAt(index);
  }
}
