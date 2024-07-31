// # src > app.module.ts 내 orm 설정
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'service',
      password: 'service1234!@#',
      database: 'MY_SERVICE',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 엔티티 경로 설정
      synchronize: false,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
