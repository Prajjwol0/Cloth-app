import { Module } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariant } from './entities/product-variant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariant])],
  providers: [ProductVariantService],
})
export class ProductVariantModule {}
