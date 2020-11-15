import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): string {
    return 'Api Version 1.0.0';
  }
}
