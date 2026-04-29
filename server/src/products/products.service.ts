import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create({
      name: createProductDto.name,
      description: createProductDto.description,
      brand: createProductDto.brand,
      isActive: createProductDto.isActive ?? true,

      //  CATEGORY
      category: createProductDto.categoryId
        ? ({ id: createProductDto.categoryId } as any)
        : null,

      //  VARIANTS
      variants:
        createProductDto.variants.map((v) => ({
          size: v.size,
          colour: v.colour,
          price: v.price,
          discountPrice: v.discountPrice ?? null,
          stock: v.stock,
        })) ?? [],
    });

    const savedProduct = await this.productRepo.save(product);

    return {
      message: 'Product created!!',
      savedProduct,
    };
  }

  async findAll() {
    return this.productRepo.find({
      relations: ['category', 'variants'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: string) {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category', 'variants'],
    });
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Product not found!!');
    }
    const updatedProduct = Object.assign(product, updateProductDto);
    return await this.productRepo.save(updatedProduct);
  }

  async remove(id: string) {
    const product = await this.productRepo.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Product not found!!');
    }
    await this.productRepo.remove(product);
    return `This action removes a #${id} product`;
  }
}
