import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
export declare class ProductsServices {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUser(): Promise<User[]>;
}
