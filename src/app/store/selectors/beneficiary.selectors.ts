import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.states';
import { IBeneficiaryState } from '../states/beneficiary.states';

export const getBeneficiaryState = (state: IAppState) => state.beneficiary;

export const getAllBeneficiaries = createSelector(
    getBeneficiaryState,
    (state: IBeneficiaryState) => state.beneficiaries
)