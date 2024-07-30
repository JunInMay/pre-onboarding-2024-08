// main.ts 수정
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 추가 */
  const config = new DocumentBuilder()
    .setTitle('Nest With Next')
    .setDescription('Nest API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /* 추가 End */

  await app.listen(3000);
}
bootstrap();
