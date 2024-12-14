import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Users } from './models/user.service';

@Controller('/user')
export class AppController {
  @Get()
  async getUsers() {
    return await new Users().getUsers();
  }
  @Post()
  async postUsers(request: any) {
    const user = new Users(
      request.body.name,
      request.body.email,
      request.body.password,
    );
    return async () => {
      try {
        await new Users().postUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        //
        return await new Users().postUser(user);
      }
    };
  }
  @Put(':id')
  async putUser(request: any) {
    const user = new Users(
      request.body.name,
      request.body.email,
      request.body.password,
    );
    user.putUser(request.params.id, user);
  }
  @Delete(':id')
  async deleteUser(request: any) {
    new Users().deleteUser(request.params.id);
  }
}
