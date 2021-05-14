import { Product } from './products.modle';
export declare class ProductsServices {
    products: Product[];
    insertProduct(title: string, description: string, price: number): Promise<any>;
}
