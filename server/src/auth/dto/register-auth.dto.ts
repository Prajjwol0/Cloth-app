import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @ApiProperty({ example: 'Ram' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'ram@gmail.com' })
  @IsEmail({}, { message: 'Please provide the valid email.' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email!: string;

  @ApiProperty({ example: 'pw' })
  @IsString()
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(6, { message: 'Password must be at least then 6 characters' })
  password!: string;
}