import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsBoolean,
  isDate,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;

  @IsNotEmpty()
  readonly role_id: number;

  readonly verified_at: Date;
  readonly created_at: Date;
  readonly updated_nt: Date;
  readonly deleted_at: Date;
}
