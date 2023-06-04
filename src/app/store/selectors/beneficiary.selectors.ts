import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.states';
import { IBeneficiaryState } from '../states/beneficiary.states';

const getBeneficiaryState = (state: IAppState) => state.beneficiary;

export const getAllBeneficiaries = createSelector(
    getBeneficiaryState,
    (state: IBeneficiaryState) => state.beneficiaries
)