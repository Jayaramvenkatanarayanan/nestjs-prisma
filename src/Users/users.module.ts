import { Module } from "@nestjs/common";
import { ProductsController } from "./users.controller";
import { UsersServices } from "./users.service";
import { PrismaService } from "../prisma.service";
@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [UsersServices, PrismaService],
})
export class UsersModel {}
