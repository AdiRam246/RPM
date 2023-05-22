import { CreatePatientInput } from './create-patient.input';
import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class UpdatePatientInput extends PartialType(CreatePatientInput) {
  patientId: UUID;
}
