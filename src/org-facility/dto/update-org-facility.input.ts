import { CreateOrgFacilityInput } from './create-org-facility.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrgFacilityInput extends PartialType(
  CreateOrgFacilityInput,
) {
  id: number;
}
