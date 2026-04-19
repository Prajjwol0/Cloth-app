import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
   @ApiProperty({example: "Men"})
   @IsString()
   cName!: string;

   @ApiProperty({ example:"This is a premium men cloth"})
   @IsOptional()
   @IsString()
   cDescription! :string
}
