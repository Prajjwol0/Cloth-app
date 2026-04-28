import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email!: string;

  @Column({
    nullable: true,
    unique: true,
  })
  contact!: string;

  @Column({
    unique: false,
    nullable: false,
  })
  name!: string;

  @Column({
    nullable: false,
  })
  role!: string;

  @Column()
  password!: string;
}
