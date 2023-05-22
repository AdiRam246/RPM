import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Basicapp {
  @ObjectIdColumn()
  createdAt: string;
  @Column()
  createdBy: string;
  @Column()
  modifiedAt: string;
  @Column()
  modifiedBy: string;
  @Column()
  viaSource: string;
}
