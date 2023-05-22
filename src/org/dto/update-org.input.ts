import { CreateOrgInput } from './create-org.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrgInput extends PartialType(CreateOrgInput) {
  orgId: string;
  name?: string;
  npi?: string;
}
