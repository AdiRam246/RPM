import { basicappinput } from 'src/app-basics/dto/create-basicapp.input';

export class CreateOrgInput extends basicappinput {
  orgId: string;
  name: string;
  orgType: string;
  npi: string;
}
