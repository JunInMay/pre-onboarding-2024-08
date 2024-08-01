import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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

  // 로그인
  @Post('signin')
  @HttpCode(HttpStatus.OK) // 상태 코드 200 OK 명시
  async signin(@Body() signinDto: { userId: string; password: string }) {
    const token = await this.userService.signin(signinDto);
    console.log('controller, token:', token);
    return { accessToken: token };
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
