import { Schema } from 'mongoose';

const schemaOptions = {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
};

export const AuthSchema = new Schema(
    {
        email: String,
        pass: String
    },
    schemaOptions,
);
