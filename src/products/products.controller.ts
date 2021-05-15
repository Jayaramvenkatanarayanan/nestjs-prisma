import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { ProductsServices } from './products.service';
import { Response } from 'express';
import { User } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsServices) {}

  @Get('users')
  async getUserList(@Res() response:Response):Promise<any>{
    const results = await this.productsService.getAllUser()
    response.status(HttpStatus.OK).send({data:results,status:true});
    response.end();
  }


}
