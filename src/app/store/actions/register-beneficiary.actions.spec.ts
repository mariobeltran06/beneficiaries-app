import { mockBeneficiaries } from 'src/tests/mocks/actions.mocks';
import { removeData, saveData } from './register-beneficiary.actions';

describe('Register beneficiary actions', () => {
  it('should create beneficiaries', () => {
    const action = saveData({ beneficiaries: mockBeneficiaries });
    expect(action.type).toEqual('[Register Beneficiary] Save all data');
    expect(action.beneficiaries).toEqual(mockBeneficiaries);
  });

  it('should delete beneficiaries', () => {
    const action = removeData();
    expect(action.type).toEqual('[Admin Beneficiary] Delete data');
  });
});
