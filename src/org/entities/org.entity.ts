import { Basicapp } from 'src/app-basics/entites/basicapp .entity';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class org extends Basicapp {
  @Column()
  orgId: string;
  @Column()
  name: string;
  @Column()
  npi: string;
}
