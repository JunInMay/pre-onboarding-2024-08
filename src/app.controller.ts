import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //1. localhost:3000으로 get요청시,
  @Render('index') //2. pages에 있는 index를 렌더링
  home() {
    return {};
  }

  @Get('signup')
  @Render('signup')
  signup() {
    return {};
  }

  @Get('signin')
  @Render('signin')
  signin() {
    return {};
  }

  @Get('home')
  @Render('board')
  board() {
    return {};
  }
}
