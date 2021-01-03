import { Schema } from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
};

export const UserSchema = new Schema(
    {
        name: String,
        lastname: String,
        phone: String,
        auth: {
            ref: 'auth',
            type: Schema.Types.ObjectId
        }
    },
    schemaOptions,
);
