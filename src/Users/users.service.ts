import { Injectable } from "@nestjs/common";
// model class

import { PrismaService } from "../prisma.service";
import { User, Post } from "@prisma/client";

@Injectable()
export class UsersServices {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUser(): Promise<User[]> {
    // users only
    //return this.prisma.user.findMany();

    // with posts
    return this.prisma.user.findMany({
      include: {
        posts: {},
      },
    });
  }
  async getUserByID(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }

  async createUser(userInput: any): Promise<User> {
    return this.prisma.user.create(userInput);
  }

  async userPublish(id: string): Promise<Post> {
    // Select User
    const userPost = this.prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    });
    return this.prisma.post.update({
      where: { id: Number(id) || undefined },
      data: { published: !(await userPost).published },
    });
  }

  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: { id: Number(id) },
    });
  }
}
