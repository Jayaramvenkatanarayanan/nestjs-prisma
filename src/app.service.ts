import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSecondHello(): any {
    return 'helloJayaram';
  }
}
