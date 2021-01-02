import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class UserDto {

    @ApiProperty()
    @IsEmail()
    @Matches(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/, { message: messageProperty('is not valid')})
    @IsNotEmpty({
        message: messageProperty('is required'),
    })
    email: string;

    @ApiProperty()
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: messageProperty('is too weak') })
    @IsNotEmpty({
        message: messageProperty('is required'),
    })
    pass: string;


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
    phone: string
}

function messageProperty(message: string): string {
    return `The '$property' property ${message}`;
}