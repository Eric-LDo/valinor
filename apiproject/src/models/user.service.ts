import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export class Users {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  constructor(name?: string, email?: string, password?: string) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
  async getUsers() {
    const prisma = new PrismaClient();
    const users = await prisma.users.findMany();
    return users;
  }
  async postUser(user: Users) {
    const prisma = new PrismaClient();
    const newUser = await prisma.users.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return {
      newUser,
    };
  }
  async putUser(id: string, user: Users) {
    const prisma = new PrismaClient();
    const updateUser = await prisma.users.update({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      where: {
        id: id,
      },
    });
    return {
      updateUser,
    };
  }
  async deleteUser(id: string) {
    const prisma = new PrismaClient();
    const deleteUser = await prisma.users.delete({
      where: {
        id: id,
      },
    });
    return {
      deleteUser,
    };
  }
}
