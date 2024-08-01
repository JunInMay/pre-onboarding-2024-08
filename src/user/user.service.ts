import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  // 사용자 생성
  async createUser(createUserDto: {
    email: string;
    userId: string;
    password: string;
  }): Promise<User> {
    console.log('DTO 값:', createUserDto); // 로그 출력으로 값 확인
    const user = this.userRepository.create({
      userId: createUserDto.userId,
      userEmail: createUserDto.email, // DTO의 필드 이름과 일치시켜야 함
      password: createUserDto.password,
    });
    console.log('user 값:', user); // 로그 출력으로 값 확인
    return await this.userRepository.save(user);
  }

  // 로그인
  async signin(signinDto: { userId: string; password: string }) {
    const user = await this.validateUser(signinDto);

    if (user === null) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: (await user).userId };
    const token = this.jwtService.sign(payload);
    console.log('token : ', token);

    return token;
  }

  // 사용자 PW 검증
  async validateUser(validateUserDto: { userId: string; password: string }) {
    const user = await this.userRepository.findOneBy({
      userId: validateUserDto.userId,
    });
    console.log(user);

    if (!user) {
      return null;
    }

    if (validateUserDto.password === user.password) return user;
    else return null;
  }

  // 모든 사용자 조회
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // 특정 사용자 조회
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
