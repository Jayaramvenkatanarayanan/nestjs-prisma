import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  Param,
  Put,
  Patch,
  Delete,
} from "@nestjs/common";
import { UsersServices } from "./users.service";
import { Response } from "express";
import { User, Post as PostModel, Prisma } from "@prisma/client";

@Controller("userController")
export class ProductsController {
  constructor(private readonly usersServices: UsersServices) {}

  @Get("users")
  async getUserList(@Res() response: Response): Promise<any> {
    const results = await this.usersServices.getAllUser();
    response.status(HttpStatus.OK).send({ data: results, status: true });
    response.end();
  }

  @Get("user/:id")
  async getUserByID(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<any> {
    const results = await this.usersServices.getUserByID(id);
    if (results !== null) {
      response.status(HttpStatus.OK).send({ data: results, status: true });
      response.end();
    } else {
      response.status(HttpStatus.NOT_FOUND).send({ data: [], status: false });
      response.end();
    }
  }

  // create New User
  @Post("addNewUser")
  async createNewUser(
    @Res() response: Response,
    @Body()
    userData: {
      name: string;
      email: string;
      posts: Prisma.PostCreateInput[];
    }
  ): Promise<any> {
    const postData = userData.posts?.map((post) => {
      return { title: "name1", content: "data2" };
    });
    var input = {
      data: {
        name: userData.name,
        email: userData.email,
        posts: {
          create: postData,
        },
      },
    };
    const addedNewUser = await this.usersServices.createUser(input);
    if (addedNewUser) {
      response
        .status(HttpStatus.OK)
        .send({ data: "usercreated.", status: true });
      response.end();
    } else {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ data: "usercreate Failed.", status: false });
      response.end();
    }
  }

  // modified publish
  @Patch("userPublish/:id")
  async togglePublishPost(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<any> {
    const userPublised = await this.usersServices.userPublish(id);
    if (userPublised) {
      response
        .status(HttpStatus.OK)
        .send({ data: "userPublished.", status: true });
      response.end();
    } else {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ data: "userPublish Failed.", status: false });
      response.end();
    }
  }

  // Delete User
  @Delete("deletePost/:id")
  async deletePost(
    @Param("id") id: string,
    @Res() response: Response
  ): Promise<any> {
    const userPostDeleted = await this.usersServices.deletePost(id);
    if (userPostDeleted) {
      response
        .status(HttpStatus.OK)
        .send({ data: "userpostDeleted.", status: true });
      response.end();
    } else {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ data: "userpostDeleted Failed.", status: false });
      response.end();
    }
  }
}
