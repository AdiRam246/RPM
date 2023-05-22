import { CreateOrgInput } from 'src/org/dto/create-org.input';

export class CreateOrgFacilityInput {
  orgFacilityId: string;
  orgId: string;
  facilityId: string;
  active: boolean;
  orgdetail: [CreateOrgInput];
}
