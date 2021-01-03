import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from 'src/config/config.service';

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://localhost:5672'
      ],
      queue: 'exmer-dev',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      prefetchCount: 1
    }
  });
  await app.listenAsync();
}
bootstrap();