import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getRecaptchaConfig } from 'src/config/recaptcha.config';
import { ProviderModule } from './provider/provider.module';
import { getProvidersConfig } from 'src/config/providers.config';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { MailService } from 'src/libs/mail/mail.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';

@Module({
  imports: [
    ProviderModule.registerAsync({
      imports: [ConfigModule],
      useFactory: getProvidersConfig,
      inject: [ConfigService],
    }),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService],
    }),
    forwardRef(() => EmailConfirmationModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, MailService, TwoFactorAuthService],
  exports: [AuthService],
})
export class AuthModule {}
