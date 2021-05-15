import { UsersServices } from "./users.service";
import { Response } from "express";
import { Prisma } from "@prisma/client";
export declare class ProductsController {
    private readonly usersServices;
    constructor(usersServices: UsersServices);
    getUserList(response: Response): Promise<any>;
    getUserByID(id: string, response: Response): Promise<any>;
    createNewUser(response: Response, userData: {
        name: string;
        email: string;
        posts: Prisma.PostCreateInput[];
    }): Promise<any>;
    togglePublishPost(id: string, response: Response): Promise<any>;
    deletePost(id: string, response: Response): Promise<any>;
}
