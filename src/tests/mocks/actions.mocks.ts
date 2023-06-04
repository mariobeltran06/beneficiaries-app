import { IBeneficiary } from 'src/app/modules/register-beneficiary/interfaces/beneficiary.interface';

export const mockBeneficiaries: IBeneficiary[] = [
  { fullname: 'John Smith', relationship: 'Hijo', percentage: 20 },
  { fullname: 'Carl Smith', relationship: 'Padre', percentage: 20 },
  { fullname: 'Rebeca Smith', relationship: 'Madre', percentage: 20 },
  { fullname: 'Sam Smith', relationship: 'Cónyugue', percentage: 20 },
  { fullname: 'Steve Smith', relationship: 'Hijo', percentage: 20 },
];
