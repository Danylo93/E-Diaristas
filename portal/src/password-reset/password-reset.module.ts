import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from 'src/common/mail/mail.service';
import { UserPlatform } from 'src/user-platform/entities/user-platform.entity';
import { PasswordReset } from './entities/password-reset.entity';
import { PasswordResetController } from './password-reset.controller';
import { PasswordResetService } from './password-reset.service';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordReset, UserPlatform])],
  controllers: [PasswordResetController],
  providers: [MailService, PasswordResetService],
})
export class PasswordResetModule {}