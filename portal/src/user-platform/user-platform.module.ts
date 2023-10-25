import { Module } from '@nestjs/common';
import { UserPlatformService } from './user-platform.service';
import { UserPlatformController } from './user-platform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPlatform } from './entities/user-platform.entity';
import { Utils } from 'src/utils/utils';

@Module({
  imports: [TypeOrmModule.forFeature([UserPlatform])],
  controllers: [UserPlatformController],
  providers: [UserPlatformService, Utils],
  exports: [UserPlatformService],
})
export class UserPlatformModule {}
