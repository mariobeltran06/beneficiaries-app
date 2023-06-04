import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.scss']
})
export class FormBeneficiaryComponent {
  @Input() formBeneficiary!: FormGroup;
}
