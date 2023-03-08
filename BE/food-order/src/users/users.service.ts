import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/updated-user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUserById(userId: number): Promise<User> {
    if (!userId) {
      return null;
    }
    return this.usersRepository.findOne({ userId });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  findOne(userId: number) {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async find(email: string) {
    return this.usersRepository.find({ email });
  }

  async createUser(email: string, password: string): Promise<User> {
    return this.usersRepository.create({
      userId: Math.random() * 10,
      email,
      password,
      name: '',
      postalCode: '',
      city: '',
      address: '',
      admin: false,
      loggedIn: false,
    });
  }

  async updateUser(email: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ email }, userUpdates);
  }
}
