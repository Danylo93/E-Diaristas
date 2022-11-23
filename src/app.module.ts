import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ServicesModule } from './services/services.module';
import { UserPlatformModule } from './user-platform/user-platform.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  }), ServicesModule, UserPlatformModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
