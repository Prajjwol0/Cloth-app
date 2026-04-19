import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  cName!: string;

  @Column({
    type: 'text',
  })
  cDescription!: string;
}
