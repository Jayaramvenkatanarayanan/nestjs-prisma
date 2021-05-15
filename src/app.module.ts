import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";
import { UsersModel } from "./Users/users.module";

@Module({
  imports: [UsersModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
