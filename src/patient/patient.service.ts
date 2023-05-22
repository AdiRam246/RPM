import { Injectable } from '@nestjs/common';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { Patient } from './entities/patient.entity';
import * as uuid from 'uuid';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly PatientRepository: MongoRepository<Patient>,
  ) {}
  create(createPatientInput: CreatePatientInput) {
    console.log(createPatientInput);
    const user = new Patient();
    user.patientId = uuid.v4();
    user.firstName = createPatientInput.firstName;
    user.lastName = createPatientInput.lastName;
    user.dateOfBirth = createPatientInput.dateOfBirth;
    user.modifiedBy = createPatientInput.modifiedBy;
    user.createdBy = createPatientInput.createdBy;
    return this.PatientRepository.save(user);
  }

  findAll(patientName: string) {
    const user = {
      firstName: { $regex: patientName, $options: 'i' },
      lastName: { $regex: patientName, $options: 'i' },
    };
    return this.PatientRepository.find(user);
  }

  findOne(patientId: string) {
    return this.PatientRepository.findOne({ where: { patientId: patientId } });
  }
  async update(patientId: UUID, updatePatientInput: UpdatePatientInput) {
    const user = await this.PatientRepository.findOneAndUpdate(
      { patientId: patientId },
      { $set: updatePatientInput },
    );
    console.log(user);
    return user;
  }

  remove(patientId: string) {
    this.PatientRepository.findOneAndDelete({ patientId });

    return true;
  }
}
