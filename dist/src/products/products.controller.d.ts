import { ProductsServices } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsServices);
    getUserList(response: Response): Promise<any>;
}
