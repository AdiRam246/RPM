import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Address {
  @ObjectIdColumn()
  line1: string;
  @Column()
  line2: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip: string;
  @Column()
  country: string;
}
