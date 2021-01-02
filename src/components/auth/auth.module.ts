import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { AuthProviders } from './drivers/auth.provider';
import { DatabaseConectionModule } from '../../drivers/database-conection/database-conection.module';

@Module({
  imports: [
    DatabaseConectionModule
  ],
  providers: [AuthService, ...AuthProviders],
  controllers: [AuthController]
})
export class AuthModule {}
