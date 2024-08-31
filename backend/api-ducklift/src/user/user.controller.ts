import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() userData: { email: string; password: string },
  ): Promise<User> {
    return this.userService.register(userData.email, userData.password);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(+id);
  }

  @Put(':id/email')
  async updateEmail(
    @Param('id') id: string,
    @Body('email') newEmail: string,
  ): Promise<User> {
    return this.userService.updateEmail(+id, newEmail);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(+id);
  }

  @Delete(':id/soft')
  @HttpCode(HttpStatus.NO_CONTENT)
  async softDelete(@Param('id') id: string): Promise<void> {
    await this.userService.softDelete(+id);
  }

  @Post(':id/restore')
  @HttpCode(HttpStatus.NO_CONTENT)
  async restore(@Param('id') id: string): Promise<void> {
    await this.userService.restore(+id);
  }
}
