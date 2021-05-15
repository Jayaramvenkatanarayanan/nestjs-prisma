import { Injectable } from '@nestjs/common';
// model class

import {PrismaService} from '../prisma.service'
import {User} from '@prisma/client'



@Injectable()
export class ProductsServices {

constructor(private readonly prisma: PrismaService){}

async getAllUser():Promise<User[]>{
  // users only
 //return this.prisma.user.findMany();

 // with posts
return this.prisma.user.findMany({
  include:{
    posts:{}
  }
})


}


}
