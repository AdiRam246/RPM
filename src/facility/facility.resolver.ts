import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FacilityService } from './facility.service';
import { CreateFacilityInput } from './dto/create-facility.input';
import { UpdateFacilityInput } from './dto/update-facility.input';

@Resolver('Facility')
export class FacilityResolver {
  constructor(private readonly facilityService: FacilityService) {}

  @Mutation('createFacility')
  create(@Args('createFacilityInput') createFacilityInput: CreateFacilityInput) {
    return this.facilityService.create(createFacilityInput);
  }

  @Query('facility')
  findAll() {
    return this.facilityService.findAll();
  }

  @Query('facility')
  findOne(@Args('id') id: number) {
    return this.facilityService.findOne(id);
  }

  @Mutation('updateFacility')
  update(@Args('updateFacilityInput') updateFacilityInput: UpdateFacilityInput) {
    return this.facilityService.update(updateFacilityInput.id, updateFacilityInput);
  }

  @Mutation('removeFacility')
  remove(@Args('id') id: number) {
    return this.facilityService.remove(id);
  }
}
