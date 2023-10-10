import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({ example: 'Paulo Caetano'})
    @IsString()
    name: string;

    @ApiProperty({ example: 'paulocaetano@email.com'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: '@123Abcd'})
    @IsString()
    @MinLength(8, { message: 'Senha deve conter 8 digitos' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    password: string;

    @IsString()
    picture: string;
}
