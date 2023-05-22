import { Address } from 'src/app-basics/entites/adress.entity';
import { Basicapp } from 'src/app-basics/entites/basicapp .entity';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Facility extends Basicapp {
  @ObjectIdColumn()
  id: string;
  @Column()
  facilityId: string;
  @Column()
  name: string;
  @Column()
  address: Address;
}
