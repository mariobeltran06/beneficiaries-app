import { IAppState } from 'src/app/store/states/app.states';
import { mockBeneficiaries } from './actions.mocks';

export const initialState:IAppState = {
    beneficiary:{ beneficiaries: mockBeneficiaries }
};