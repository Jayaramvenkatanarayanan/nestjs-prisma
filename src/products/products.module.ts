import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsServices } from './products.service';
import {PrismaService} from '../prisma.service'
@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsServices,PrismaService],
})
export class ProductsModule {}
