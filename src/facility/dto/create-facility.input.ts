import { Addressinput } from 'src/app-basics/dto/address.input';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class CreateFacilityInput {
  facilityId: UUID;
  name: string;
  address: Addressinput;
}
