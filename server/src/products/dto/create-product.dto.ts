import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'T-shirt' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'Sigma boy T-shirt' })
  @IsString()
  description!: string;

  @ApiProperty({ example: 'Sportune' })
  @IsString()
  brand!: string;

  @ApiProperty({ example: 5000 })
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({ example: 4000, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountPrice?: number;

  @ApiProperty({ example: 'NPR' })
  @IsString()
  currency!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive!: boolean;

  @ApiProperty({ example: 'uuid-category-id' })
  @IsUUID()
  categoryId!: string;
}
