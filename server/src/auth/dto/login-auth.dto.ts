import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty( {example: 'ram@gmail.com'} )
    @IsEmail()
    email!: string;

    @ApiProperty( {example: 'pw'})
    @IsString()
    password!: string;
}