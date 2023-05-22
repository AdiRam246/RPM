import { Module } from '@nestjs/common';
import { OrgFacilityService } from './org-facility.service';
import { OrgFacilityResolver } from './org-facility.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgFacility } from './entities/org-facility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrgFacility])],
  providers: [OrgFacilityResolver, OrgFacilityService],
})
export class OrgFacilityModule {}
