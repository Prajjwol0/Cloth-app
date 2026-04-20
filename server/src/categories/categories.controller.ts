import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('catagories')
export class CategoriesController {
  constructor(private readonly catagoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCatagoryDto: CreateCategoryDto) {
    return this.catagoriesService.create(createCatagoryDto);
  }

  @Get()
  findAll() {
    return this.catagoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catagoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatagoryDto: UpdateCategoryDto,
  ) {
    return this.catagoriesService.update(id, updateCatagoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catagoriesService.remove(id);
  }
}