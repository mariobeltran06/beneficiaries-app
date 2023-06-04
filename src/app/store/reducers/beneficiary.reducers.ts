import { createReducer, on } from '@ngrx/store';
import { saveData } from '../actions/register-beneficiary.actions';
import { beneficiaryInitialState } from '../states/beneficiary.states';

export const beneficiaryReducers = createReducer(
  beneficiaryInitialState,
  on(saveData, (state, { beneficiaries }) => ({ ...state, beneficiaries }))
);
