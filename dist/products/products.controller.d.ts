import { ProductsServices } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsServices);
    createProducts(postData: {
        title: string;
        description: string;
        price: number;
    }, res: Response): Promise<any>;
}
