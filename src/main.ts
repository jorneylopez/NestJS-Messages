import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express'



async function bootstrap() {
  const server = express()

  const appComputerModule = await NestFactory.create(ComputerModule, new ExpressAdapter(server));
  const appMessagesModule = await NestFactory.create(MessagesModule, new ExpressAdapter(server));

  await appComputerModule.init();
  await appMessagesModule.init();

  appComputerModule.useGlobalPipes(
    new ValidationPipe()
  );

  appMessagesModule.useGlobalPipes(
    new ValidationPipe()
  );

  server.listen(3000);
}
bootstrap();
