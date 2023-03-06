import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Param,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/updated-user.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get(':email')
  async getUser(@Param('email') email: string): Promise<User> {
    return this.usersService.getUserByEmail(email);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get('/whoami')
  whoAmI(@Session() session: any) {
    return this.usersService.getUserById(session.loggedIn);
  }

  @Post('/signout')
  signOut(@Session() session: any, @Body() updateUserDto: UpdateUserDto) {
    session.userId = null;
  }

  @Post('/signup')
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Session() session: any,
  ): Promise<User> {
    const user = await this.authService.signUp(
      createUserDto.email,
      createUserDto.password,
    );
    session.userId = user.userId;
    return user;
  }

  @Post('/signin')
  async signIn(
    @Body() createUserDto: CreateUserDto,
    @Session() session: any,
  ): Promise<User> {
    const user = await this.authService.signIn(
      createUserDto.email,
      createUserDto.password,
    );
    session.userId = user.userId;
    return user;
  }

  @Patch(':email')
  async updateUser(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(email, updateUserDto);
  }
}
