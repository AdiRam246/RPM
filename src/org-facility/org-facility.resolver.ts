import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrgFacilityService } from './org-facility.service';
import { CreateOrgFacilityInput } from './dto/create-org-facility.input';
import { UpdateOrgFacilityInput } from './dto/update-org-facility.input';
import { OrgFacility } from './entities/org-facility.entity';

@Resolver(() => OrgFacility)
export class OrgFacilityResolver {
  constructor(private orgFacilityService: OrgFacilityService) {}

  @Mutation(() => OrgFacility)
  createOrgFacility(
    @Args('createOrgFacilityInput')
    createOrgFacilityInput: CreateOrgFacilityInput,
  ) {
    return this.orgFacilityService.create(createOrgFacilityInput);
  }

  @Query(() => [OrgFacility], { name: 'orgFacilitys' })
  findAll(@Args('orgId') orgId: string) {
    return this.orgFacilityService.findAll(orgId);
  }

  @Query(() => OrgFacility, { name: 'orgFacility' })
  findOne(@Args('orgFacilityId') orgFacilityId: string) {
    return this.orgFacilityService.findOne(orgFacilityId);
  }

  @Mutation(() => OrgFacility)
  updateOrgFacility(
    @Args('updateOrgFacilityInput')
    updateOrgFacilityInput: UpdateOrgFacilityInput,
  ) {
    const { orgFacilityId, ...rest } = updateOrgFacilityInput;
    return this.orgFacilityService.update(orgFacilityId, rest);
  }

  @Mutation(() => Boolean)
  removeOrgFacility(@Args('orgFacilityId') orgFacilityId: string) {
    return this.orgFacilityService.remove(orgFacilityId);
  }
}
