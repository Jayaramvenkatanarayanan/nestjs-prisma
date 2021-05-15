import { PrismaService } from "../prisma.service";
import { User, Post } from "@prisma/client";
export declare class UsersServices {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUser(): Promise<User[]>;
    getUserByID(id: string): Promise<User>;
    createUser(userInput: any): Promise<User>;
    userPublish(id: string): Promise<Post>;
    deletePost(id: string): Promise<Post>;
}
