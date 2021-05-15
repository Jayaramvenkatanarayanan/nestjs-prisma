import { Injectable } from '@nestjs/common';
// model class
import { Product } from './products.model';
// connect prisma client
import {PrismaService} from '../dto/prisma.service'

@Injectable()
export class ProductsServices {
  // List of Products
  products: Product[] = [];

  // insert Product
  async insertProduct(
    title: string,
    description: string,
    price: number,
  ): Promise<any> {
    const id = '2222';
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
    return this.products;
    // console.dir(this.products);
    // return id;
  }
}
