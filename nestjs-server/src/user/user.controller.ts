import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { UserRole } from 'prisma/__generated__';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  public async findProfile(@Authorized('id') userId: string) {
    return this.userService.findById(userId);
  }

  @Authorization(UserRole.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('by-id/:id')
  public async findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Put()
  public async update(
    @Authorized('id') userId: string,
    @Body() dto: UpdateUserDto,
  ) {
    if (Object.keys(dto).length === 0) {
      throw new BadRequestException('No data provided for update');
    }
    return this.userService.update(userId, dto);
  }
}
