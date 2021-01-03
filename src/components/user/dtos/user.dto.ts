import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMongoId, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class UserDto {

    @ApiProperty()
    @IsNotEmpty({
        message: messageProperty('is required'),
    })
    @IsString({
        message: messageProperty('must be a text string'),
    })
    @MaxLength(20, {
        message: messageProperty('must be a maximum $constraint1 characters'),
    })
    name: string

    @ApiProperty()
    @IsNotEmpty({
        message: messageProperty('is required'),
    })
    @IsString({
        message: messageProperty('must be a text string'),
    })
    @MaxLength(20, {
        message: messageProperty('must be a maximum $constraint1 characters'),
    })
    lastname: string

    @ApiProperty()
    @IsNotEmpty({
        message: messageProperty('is required'),
    })
    @MaxLength(20, {
        message: messageProperty('must be a maximum $constraint1 characters'),
    })
    @MinLength(10, {
        message: messageProperty('must be a minimum $constraint1 characters'),
    })
    phone: string;

    @IsMongoId()
    auth: string
}

function messageProperty(message: string): string {
    return `The '$property' property ${message}`;
}