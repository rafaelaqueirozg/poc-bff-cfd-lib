import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from 'poc-bff-common-lib';
import { ApiHeader } from '@nestjs/swagger';

@Controller(['cfd'])
@UseGuards(AuthGuard)
@ApiHeader({ name: 'x-api-key', required: true })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `ENV: ${process.env.API_KEY}`;
  }

  @Get('/titulos')
  getTitulos(): string {
    return this.appService.getTitulos();
  }

  @Get('/user-types')
  getUserTypes(): object {
    return this.appService.getUserTypes();
  }

  @Get('/todos')
  async getTodos(): Promise<Array<object>> {
    return this.appService.getTodos();
  }
}
