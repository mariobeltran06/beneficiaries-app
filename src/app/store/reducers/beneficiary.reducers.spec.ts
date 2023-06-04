import { mockBeneficiaries } from 'src/tests/mocks/actions.mocks';
import { initialState } from 'src/tests/mocks/states.mocks';
import { removeData, saveData } from '../actions/register-beneficiary.actions';
import { IBeneficiaryState } from '../states/beneficiary.states';
import { beneficiaryReducers } from './beneficiary.reducers';

describe('Beneficiary reducers', () => {
  it('should return the default state with unknown action', () => {
    const action = { type: 'Unknown' };
    const state = beneficiaryReducers(initialState.beneficiary, action);

    expect(state).toBe(initialState.beneficiary);
  });

  it('should update beneficiaries', () => {
    const action = saveData({ beneficiaries: mockBeneficiaries });
    const state = beneficiaryReducers(initialState.beneficiary, action);
    const newState: IBeneficiaryState = {
      beneficiaries: mockBeneficiaries,
    };

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should update beneficiaries to null', () => {
    const action = removeData();
    const state = beneficiaryReducers(initialState.beneficiary, action);
    const newState: IBeneficiaryState = {
      beneficiaries: null,
    };

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
