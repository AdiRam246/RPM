import { org } from 'src/org/entities/org.entity';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class OrgFacility {
  @ObjectIdColumn()
  id: string;
  @Column()
  orgFacilityId: string;
  @Column()
  orgId: string;
  @Column()
  facilityId: string;
  @Column()
  active: boolean;
  @Column()
  orgDetail: org[];
}
