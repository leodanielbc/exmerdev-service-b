import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './components/user/user.module';
import { ConfigModule } from './config/config.module';
import { DatabaseConectionModule } from './drivers/database-conection/database-conection.module';

@Module({
  imports: [
    UserModule,
    DatabaseConectionModule,
    ConfigModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
