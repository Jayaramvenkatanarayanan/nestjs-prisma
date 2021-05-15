import {PrismaClient} from '@prisma/client';
import {Injectable,OnModuleInit,OnModuleDestroy} from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient
implements OnModuleInit,OnModuleDestroy {
    async onModuleInit(){
        await this.$connect()
        console.dir("DB connected");
    }
   async onModuleDestroy() {
    await this.$disconnect();
    }

}