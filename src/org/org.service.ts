import { Injectable } from '@nestjs/common';
import { CreateOrgInput } from './dto/create-org.input';
import { UpdateOrgInput } from './dto/update-org.input';
import * as uuid from 'uuid';
import { org } from './entities/org.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(org)
    private readonly orgRepository: MongoRepository<org>,
  ) {}

  create(createOrgInput: CreateOrgInput) {
    const orgn = new org();
    orgn.orgId = uuid.v4();
    orgn.name = createOrgInput.name;
    orgn.npi = createOrgInput.npi;
    return this.orgRepository.save(orgn);
  }

  async findAll(orgId: string) {
    console.log(orgId);
    const user = await this.orgRepository
      .aggregate([
        {
          $bucket: {
            groupBy: '$name',
            boundaries: ['a', 'f'],
            default: 'string',
            output: {
              count: { $sum: 1 },
              artists: {
                $push: {
                  name: '$name',
                  orgId: '$orgId',
                },
              },
            },
          },
        },
      ])
      .toArray();
    console.log(user);
    return user;
  }

  async findOne(orgId: string) {
    const facilities = [
      {
        $match: {
          orgId,
        },
      },
      {
        $lookup: {
          from: 'org_facility',
          localField: 'orgId',
          foreignField: 'orgId',
          as: 'orgFatility',
        },
      },
    ];
    console.log(facilities);
    const ss = await this.orgRepository.aggregate(facilities).toArray();
    console.log(ss);
    return ss;
  }

  async update(orgId: string, updateOrgInput: UpdateOrgInput) {
    try {
      return await this.orgRepository.findOneAndUpdate(
        { orgId },
        { updateOrgInput },
      );
    } catch (error) {
      // handle the error

      console.error(error);
      throw new Error('Failed to update organization.');
    }
  }

  remove(orgId: string) {
    this.orgRepository.findOneAndDelete({ orgId });
    return true;
  }
}
