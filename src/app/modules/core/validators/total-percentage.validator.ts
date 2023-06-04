import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

export function validateTotalPercentage(controlName:string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: any } | null => {
      const formArray = form as FormArray;
      const formGroup = ((formArray.controls.map((formGroup) => formGroup))) as AbstractControl[];
      const controls = formGroup.map((form: AbstractControl) => form.get(controlName));
  
      const totalPercentage = controls.reduce((total: number, control: AbstractControl | null) => {
        const value = control?.value ? parseFloat(control.value) : 1;
        return total + value;
      }, 0);
  
      if (totalPercentage !== 100) {
        return { totalPercentageInvalid: true };
      }
  
      return null;
    };
  }