
import * as mongoose from 'mongoose';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';



export const dbProviders = [
  {
    provide: 'DB_CONNECTION',
    imports: [ConfigModule],
    inject: [ConfigService],

    useFactory: async (config: ConfigService): Promise<typeof mongoose> =>

    await mongoose.connect(config.get('MONGO_URI'),
        {
          useFindAndModify: false,
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
        }
      ),
  },

];



