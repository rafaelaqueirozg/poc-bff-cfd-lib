import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserType } from 'common-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World - CFD 🤠!';
  }

  getTitulos(): string {
    return 'Titulos';
  }

  getUserTypes(): object {
    return Object.fromEntries(Object.entries(UserType));
  }

  async getTodos(): Promise<Array<object>> {
    const response = await axios.get<Array<object>>(
      'https://jsonplaceholder.typicode.com/todos',
    );

    return response.data;
  }
}
