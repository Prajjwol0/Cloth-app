import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: string;

  @Column({
    nullable: false,
  })
  name!: string;

  @Column('text')
  description!: string;

  @Column()
  brand!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  discount!: number;

  @Column('text')
  currency!: string;

  @Column({ default: true })
  isActive!: boolean;

  //   Relations:
  @ManyToOne(() => Category, category => category.products,{
    onDelete: "SET NULL",
    nullable: true,
  })
  category!: Category | null;

}
