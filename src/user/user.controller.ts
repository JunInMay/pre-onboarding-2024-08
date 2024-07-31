import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 사용자 생성
  @Post('signup')
  async createUser(
    @Body() createUserDto: { userId: string; email: string; password: string },
  ): Promise<User> {
    console.log('타긴 해?');
    console.log('controller', createUserDto);
    const result = this.userService.createUser(createUserDto);
    console.log('res : ', result);
    return result;
  }

  // 모든 사용자 조회
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // 특정 사용자 조회
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
}
