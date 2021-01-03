import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Auth } from '../../../drivers/mongoose/interfaces/auth.interface';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject("USER_MODEL") private readonly userModel: Model<Auth>
    ) { }

    async createUser(data: UserDto) {

        try {

            return await new this.userModel(data).save();

        } catch (error) {
            throw error;
        }
    }
}
