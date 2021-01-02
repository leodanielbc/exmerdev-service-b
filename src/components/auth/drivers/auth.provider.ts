import { Connection } from 'mongoose';
import { AuthSchema } from '../../../drivers/mongoose/schemas/auth.schema';

export const AuthProviders = [
    {
        provide: 'AUTH_MODEL',
        useFactory: (connection: Connection) => connection.model('auth', AuthSchema , 'auth'),
        inject: ['DB_CONNECTION']
    },
];
