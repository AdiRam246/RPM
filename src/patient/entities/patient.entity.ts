import { Addressinput } from 'src/app-basics/dto/address.input';
import { Basicapp } from 'src/app-basics/entites/basicapp .entity';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Patient extends Basicapp {
  @Column()
  patientId: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  dateOfBirth: string;
  @Column()
  addresses: Addressinput[];
  @Column()
  phones: number;
  @Column()
  active: boolean;
}
