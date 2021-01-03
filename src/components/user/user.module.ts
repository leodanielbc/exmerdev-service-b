import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserProviders } from './drivers/user.provider';
import { DatabaseConectionModule } from '../../drivers/database-conection/database-conection.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseConectionModule
  ],
  providers: [UserService, ...UserProviders],
  controllers: [UserController]
})
export class UserModule {}
