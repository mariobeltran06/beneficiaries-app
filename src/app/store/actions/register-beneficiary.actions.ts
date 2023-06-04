import { IBeneficiary } from 'src/app/modules/register-beneficiary/interfaces/beneficiary.interface';
import { createAction, props } from '@ngrx/store';

export const saveData = createAction(
  '[Register Beneficiary] Save all data',
  props<{ beneficiaries: IBeneficiary[] }>()
);

export const removeData = createAction('[Admin Beneficiary] Delete data');
