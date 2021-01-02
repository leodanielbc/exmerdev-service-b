import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Auth } from '../../../drivers/mongoose/interfaces/auth.interface';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../dtos/user.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject("AUTH_MODEL") private readonly authModel: Model<Auth>
    ) { }

    async createUser(data: UserDto) {

        try {
            //Encriptar contraseña con BCRYPT
        const BCRYPT_SALT_ROUNDS = 12;
        const hashPassword = await bcrypt.hash(
            data.pass,
            BCRYPT_SALT_ROUNDS,
        );
        data.pass = hashPassword;
        return await new this.authModel(data).save();
        } catch (error) {
            throw error;
        }
    }
}
