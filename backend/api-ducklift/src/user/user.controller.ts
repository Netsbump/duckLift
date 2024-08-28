import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
