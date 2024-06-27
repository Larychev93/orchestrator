import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// imports for Winston logger
import { WinstonModule } from 'nest-winston';
import { instance } from './logger/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: instance,
    }),
  });
  await app.listen(3000);
}
bootstrap();
