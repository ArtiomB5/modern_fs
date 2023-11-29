import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  });

  const config = new DocumentBuilder()
    .setTitle('Modern Fullstack Documentation')
    .setDescription('The Modern FS API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(8000, () => console.log(`Backend started on PORT=${8000}`));
}
bootstrap();
