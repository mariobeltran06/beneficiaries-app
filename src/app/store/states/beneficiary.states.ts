import { IBeneficiary } from 'src/app/modules/register-beneficiary/interfaces/beneficiary.interface';

export interface IBeneficiaryState {
  beneficiaries: IBeneficiary[] | null;
}

export const beneficiaryInitialState: IBeneficiaryState = {
  beneficiaries: null,
};
