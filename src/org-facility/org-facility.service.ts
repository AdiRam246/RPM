import { Injectable } from '@nestjs/common';
import { CreateOrgFacilityInput } from './dto/create-org-facility.input';
import { UpdateOrgFacilityInput } from './dto/update-org-facility.input';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { OrgFacility } from './entities/org-facility.entity';
import * as uuid from 'uuid';

@Injectable()
export class OrgFacilityService {
  constructor(
    @InjectRepository(OrgFacility)
    private readonly OrgFacilityRepository: MongoRepository<OrgFacility>,
  ) {}

  create(createOrgFacilityInput: CreateOrgFacilityInput) {
    const orgFacility = new OrgFacility();
    orgFacility.orgFacilityId = uuid.v4();
    orgFacility.orgId = createOrgFacilityInput.orgId;
    orgFacility.facilityId = createOrgFacilityInput.facilityId;
    orgFacility.active = createOrgFacilityInput.active;
    return this.OrgFacilityRepository.save(orgFacility);
  }

  async findAll(orgId: string) {
    const pipeline = [
      {
        $match: { orgId },
      },
      {
        $project: {
          _id: 0,
          orgFacilityId: '$orgFacilityId',
          orgId: '$orgId',
          facilityId: '$facilityId',
          active: '$active',
        },
      },
    ];
    const result = await this.OrgFacilityRepository.aggregate(
      pipeline,
    ).toArray();
    console.log(result);
    return result;
  }

  async findOne(orgFacilityId: string) {
    // Use try-catch block for error handling instead of checking for null
    try {
      const facilities = [
        {
          // Use $match stage to filter results instead of passing `orgFacilityId` to the method
          $match: {
            orgFacilityId: orgFacilityId,
          },
        },
        {
          $lookup: {
            from: 'org',
            localField: 'orgId',
            foreignField: 'orgId',
            as: 'orgdetail',
          },
        },
      ];

      // Add a call to `toArray()` to actually execute the aggregation pipeline
      const ss = await this.OrgFacilityRepository.aggregate(
        facilities,
      ).toArray();

      // Check if `ss` is an empty array instead of null
      if (ss.length > 0) {
        return ss[0]; // return the first item in the result array
      } else {
        // Throw an error if no results were found
        throw new Error('OrgFacility not found');
      }
    } catch (error) {
      // Handle the error here instead of returning null
      console.log(error);
      return null;
    }
  }

  async update(
    orgFacilityId: string,
    updateOrgFacilityInput: UpdateOrgFacilityInput,
  ) {
    const updatedOrgFacility =
      await this.OrgFacilityRepository.findOneAndUpdate(
        { orgFacilityId: orgFacilityId },
        updateOrgFacilityInput,
      );

    // check if updatedOrgFacility is null and throw an error if necessary

    return updatedOrgFacility;
  }

  remove(orgFacilityId: string) {
    this.OrgFacilityRepository.findOneAndDelete({ orgFacilityId });
    return true;
  }
}
