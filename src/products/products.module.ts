import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsServices } from './products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsServices],
})
export class ProductsModule {}
