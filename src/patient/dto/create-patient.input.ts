import { basicappinput } from 'src/app-basics/dto/create-basicapp.input';
import { Address } from 'src/app-basics/entites/adress.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class CreatePatientInput extends basicappinput {
  patientId: UUID;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: Address[];
  phones: string;
}
