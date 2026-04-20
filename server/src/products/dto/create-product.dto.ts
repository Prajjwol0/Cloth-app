import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CreateVariantDto {
  @ApiProperty({ example: 'M' })
  @IsString()
  size!: string;

  @ApiProperty({ example: 'Black' })
  @IsString()
  colour!: string;

  @ApiProperty({ example: 1999 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiPropertyOptional({ example: 1499 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  discountPrice?: number;

  @ApiProperty({ example: 50 })
  @Type(() => Number)
  @IsNumber()
  stock!: number;
}

export class CreateProductDto {
  @ApiProperty({ example: 'Nike Air Max' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'Comfortable running shoes with air cushioning' })
  @IsString()
  description!: string;

  @ApiProperty({ example: 'Nike' })
  @IsString()
  brand!: string;

  @ApiProperty({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  categoryId!: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({
    type: [Object],
    example: [
      {
        size: 'M',
        colour: 'Black',
        price: 1999,
        discountPrice: 500,
        stock: 50,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVariantDto)
  variants!: CreateVariantDto[];
}
