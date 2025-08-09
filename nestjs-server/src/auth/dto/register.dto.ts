import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import { IsPasswordsMatchingConstraint } from 'src/libs/common/decorators/is-password-matching-constraint.decorator';

export class RegisterDto {
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty({ message: 'Name is required.' })
  name: string;

  @IsString({ message: 'Email must be a string.' })
  @IsEmail({}, { message: 'Email is invalid.' })
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(6, {
    message: 'Password must contain at least 6 characters.',
  })
  password: string;

  @IsString({ message: 'Password repeat must be a string.' })
  @IsNotEmpty({ message: 'Password repeat is required.' })
  @MinLength(6, {
    message: 'Password repeat must contain at least 6 characters.',
  })
  @Validate(IsPasswordsMatchingConstraint, {
    message: 'Passwords do not match.',
  })
  passwordRepeat: string;
}
