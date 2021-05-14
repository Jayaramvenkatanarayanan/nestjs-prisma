import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ProductsServices } from './products.service';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsServices) {}
  //createProducts
  @Post('addNewProduct')
  async createProducts(
    @Body() postData: { title: string; description: string; price: number },
    @Res() res: Response,
  ): Promise<any> {
    const { title, description, price } = postData;
    const result = await this.productsService.insertProduct(
      title,
      description,
      price,
    );
    console.dir(result);
    res.status(HttpStatus.OK).send(result[0]);
    res.end();
  }
}
