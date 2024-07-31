import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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

  // 모든 사용자 조회
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // 특정 사용자 조회
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
