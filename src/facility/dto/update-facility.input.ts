import { CreateFacilityInput } from './create-facility.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFacilityInput extends PartialType(CreateFacilityInput) {
  id: number;
}
