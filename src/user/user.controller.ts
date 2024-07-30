import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('home')
  @Render('board')
  board() {
    return {};
  }
}
