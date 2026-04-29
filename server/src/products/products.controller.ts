import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RoleGuard } from '../auth/guard/role.guard';
import { ROLES } from '../auth/roles.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Protected: Only shopkeepers can Post
  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard) //Paila auth guard run hunxa tespaxi roleguard!!
  @ROLES('shopkeeper')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // Public: sabai jana le access garna pauxa (No guards)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  // Protected: Only shopkeepers can Post
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ROLES('shopkeeper')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  // Protected: Only shopkeepers can Post
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ROLES('shopkeeper')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
