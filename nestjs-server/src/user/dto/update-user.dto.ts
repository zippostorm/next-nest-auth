import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Name must be a string.' })
  @IsOptional()
  displayName?: string;

  @IsString({ message: 'Email must be a string.' })
  @IsEmail({}, { message: 'Email is invalid.' })
  @IsOptional()
  email?: string;

  @IsBoolean({ message: 'isTwoFactorEnabled must be a boolean.' })
  @IsOptional()
  isTwoFactorEnabled?: boolean;
}
