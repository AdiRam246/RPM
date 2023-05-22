import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PatientService } from './patient.service';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { Patient } from './entities/patient.entity';

@Resolver('Patient')
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  @Mutation('createPatient')
  create(@Args('createPatientInput') createPatientInput: CreatePatientInput) {
    return this.patientService.create(createPatientInput);
  }

  @Query(() => [Patient], { name: 'patients' })
  findAll(@Args('PatientName') PatientName: string) {
    return this.patientService.findAll(PatientName);
  }

  @Query('patient')
  findOne(@Args('patientId') patientId: string) {
    return this.patientService.findOne(patientId);
  }

  @Mutation('updatePatient')
  update(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientService.update(
      updatePatientInput.patientId,
      updatePatientInput,
    );
  }

  @Mutation(() => Boolean)
  removePatient(@Args('patientId') patientId: string): boolean {
    return this.patientService.remove(patientId);
  }
}
