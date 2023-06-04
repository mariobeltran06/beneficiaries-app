import { mockBeneficiaries } from 'src/tests/mocks/actions.mocks';
import { initialState } from 'src/tests/mocks/states.mocks';
import { IBeneficiaryState } from '../states/beneficiary.states';
import {
  getAllBeneficiaries,
  getBeneficiaryState,
} from './beneficiary.selectors';

describe('Beneficiary selectors', () => {
    it('should select beneficiaries', () => {
        const result = getAllBeneficiaries.projector(initialState.beneficiary);

        expect(result).toEqual(mockBeneficiaries)
    });

    it('should select user when if beneficiaries is null', () => {
        const newBeneficiaryState:IBeneficiaryState = {
            ...initialState.beneficiary,
            beneficiaries: null,
        };
        const result = getAllBeneficiaries.projector(newBeneficiaryState);

        expect(result).toBeNull();
    })

    it('should return beneficiary state', ()=>{
        const result = getBeneficiaryState(initialState);

        expect(result).toEqual(initialState.beneficiary);
    });
})