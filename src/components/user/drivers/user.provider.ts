import { Connection } from 'mongoose';
import { AuthSchema } from '../../../drivers/mongoose/schemas/auth.schema';
import { UserSchema } from '../../../drivers/mongoose/schemas/user.schema';

export const UserProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('user', UserSchema , 'user'),
        inject: ['DB_CONNECTION']
    },
];
