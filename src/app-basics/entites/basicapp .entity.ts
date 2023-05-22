import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Basicapp {
  @ObjectIdColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn()
  modifiedAt: string;

  @Column()
  modifiedBy: string;

  @Column()
  viaSource: string;
}
