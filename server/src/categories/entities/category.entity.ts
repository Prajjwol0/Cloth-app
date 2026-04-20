import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

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


// Relation

@OneToMany(()=> Product, product=> product.category)
products!: Product[];

}