import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPlatform } from 'src/user-platform/entities/user-platform.entity';
import { UserPlatformService } from 'src/user-platform/user-platform.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPlatform])],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer, UserPlatformService]
})
export class AuthModule {}
