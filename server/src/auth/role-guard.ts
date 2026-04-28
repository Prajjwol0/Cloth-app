import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class ProductOwnerGuard implements CanActivate {
  constructor(private readonly productService: ProductsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    return true;
  }
}
