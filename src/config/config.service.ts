import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
    provideConfigSpec() {
        return {
            HOST: {
                validate: Joi.string(),
                required: true,
                default: process.env.HOST,
            },
            MONGO_URI: {
                validate: Joi.string(),
                required: true,
            },
            PORT: {
                validate: Joi.number()
                    .min(5000)
                    .max(65535),
                required: false,
                default: process.env.PORT
            },
        };
    }
}
