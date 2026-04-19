import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepo.create(createCategoryDto);
    const savedCategory = await this.categoryRepo.save(category);

    return {
      message: 'Category created',
      category: savedCategory,
    };
  }

  async findAll() {
    return await this.categoryRepo.find({
      select: {
        cName: true,
        cDescription: true,
        id: true,
      },
    });
  }

  async findOne(id: string) {
    const category = await this.categoryRepo.findOne({
      where: {
        id,
      },
    });
    if (!category) {
      throw new NotFoundException(`id:${id} not found`);
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id); // reuse your method

    const updated = Object.assign(category, updateCategoryDto);
    await this.categoryRepo.save(updated);

    return {
      message: 'Category updated!!',
      updatedCategory: updated,
    };
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    await this.categoryRepo.remove(category);
    return `Removed a #${id} category`;
  }
}
