import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ProductsService } from '../products/products.service';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class ProductOwnerGuard implements CanActivate {
  constructor(
    private readonly productService: ProductsService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    if (requiredRoles && !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Insufficient role');
    }

    const productId = request.params.id;
    const product = await this.productService.findOne(productId);

    if (!product || product.ownerId !== user.id) {
      throw new ForbiddenException('You do not own this product');
    }

    return true;
  }
}
