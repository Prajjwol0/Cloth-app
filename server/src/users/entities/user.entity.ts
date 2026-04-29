import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

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

  @OneToMany(() => Product, (product) => product.owner)
  products!: Product[];
}
