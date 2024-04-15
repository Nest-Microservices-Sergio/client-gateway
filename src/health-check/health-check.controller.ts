import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  healtCheck() {
    return 'Client Gateway is up and running!!!';
  }
}
