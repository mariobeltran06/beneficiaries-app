import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RELATIONSHIP_ITEMS } from 'src/app/modules/core/constants/relationship-items.constant';
import { IRelashionshipItem } from 'src/app/modules/core/interfaces/relationship-item.interface';
import { PATTERN_NAME } from 'src/app/modules/core/utils/patterns.util';
import { validateTotalPercentage } from 'src/app/modules/core/validators/total-percentage.validator';
import { saveData } from 'src/app/store/actions/register-beneficiary.actions';
import { IAppState } from 'src/app/store/states/app.states';
import { Store } from '@ngrx/store';
import { IBeneficiary } from '../../interfaces/beneficiary.interface';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.scss'],
})
export class FormBeneficiaryComponent {
  formBeneficiary: FormGroup;
  itemsRelationship: IRelashionshipItem[] = RELATIONSHIP_ITEMS;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private router: Router
  ) {
    this.formBeneficiary = this.formBuilder.group({
      beneficiaries: this.formBuilder.array(
        [],
        validateTotalPercentage('percentage')
      ),
    });
  }

  get beneficiaries(): FormArray {
    return this.formBeneficiary.get('beneficiaries') as FormArray;
  }

  get arrayBeneficiariesLength(): number {
    return (this.formBeneficiary.get('beneficiaries') as FormArray).length;
  }

  get totalPercentageError(): boolean | null {
    return this.formBeneficiary.get('beneficiaries')?.errors?.[
      'totalPercentageInvalid'
    ];
  }

  addBeneficiary(): void {
    const beneficiaryFormGroup = this.formBuilder.nonNullable.group({
      fullname: [
        '',
        [
          Validators.required,
          Validators.pattern(PATTERN_NAME),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      relationship: [this.itemsRelationship[0].value, [Validators.required]],
      percentage: [
        1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
    this.beneficiaries.push(beneficiaryFormGroup);
  }

  removeBeneficiary(index: number): void {
    this.beneficiaries.removeAt(index);
  }

  saveForm(): void {
    if (this.beneficiaries.valid) {
      this.store.dispatch(
        saveData({
          beneficiaries: [
            ...this.formBeneficiary.value.beneficiaries,
          ] as IBeneficiary[],
        })
      );
      this.router.navigate(['lista-beneficiarios']);
    }
  }
}
