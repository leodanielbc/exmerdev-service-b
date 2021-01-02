import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigManagerModule } from '@nestjsplus/config';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      envKey: 'NODE_ENV',
      useEnv: {
        folder: 'configs_env',
      },
      allowExtras: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
