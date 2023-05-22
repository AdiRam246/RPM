import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrgService } from './org.service';
import { CreateOrgInput } from './dto/create-org.input';
import { UpdateOrgInput } from './dto/update-org.input';
import { org } from './entities/org.entity';

@Resolver('Org')
export class OrgResolver {
  constructor(private readonly orgService: OrgService) {}

  @Mutation('createOrg')
  create(@Args('createOrgInput') createOrgInput: CreateOrgInput) {
    return this.orgService.create(createOrgInput);
  }

  @Query(() => [org], { name: 'orgall' })
  findAll(@Args('orgId') orgId: string) {
    return this.orgService.findAll(orgId);
  }

  @Query(() => org, { name: 'org' })
  findOne(@Args('orgId') orgId: string) {
    return this.orgService.findOne(orgId);
  }

  @Mutation('updateOrg')
  update(@Args('updateOrgInput') updateOrgInput: UpdateOrgInput) {
    return this.orgService.update(updateOrgInput.orgId, updateOrgInput);
  }

  @Mutation(() => Boolean) //Specify the return type of the mutation resolver
  removeOrg(@Args('orgId') orgId: string): boolean {
    return this.orgService.remove(orgId); //Assuming that remove method of orgService returns a boolean value
  }
}
