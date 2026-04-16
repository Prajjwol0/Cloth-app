import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";


export class CreateUserDto {

    @ApiProperty({ example: "Ram Thapa"})
    @IsString()
    name!: string;

    @ApiProperty({ example: "+9779876543210"})
    @IsPhoneNumber("NP")
    contact!: string;

    @ApiProperty({ example: "ram@gmail.com"})
    @IsEmail()
    email!: string;

}
