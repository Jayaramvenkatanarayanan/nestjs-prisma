import { ProductsServices } from "./products.service";
import { Response } from "express";
import { Prisma } from "@prisma/client";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsServices);
    getUserList(response: Response): Promise<any>;
    getUserByID(id: string, response: Response): Promise<any>;
    createNewUser(response: Response, userData: {
        name: string;
        email: string;
        posts: Prisma.PostCreateInput[];
    }): Promise<any>;
}
