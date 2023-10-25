import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ServicosModule } from './services/servicos.module';
import { UserPlatformModule } from './user-platform/user-platform.module';
import { AuthModule } from './auth/auth.module';
import { DiariasModule } from './diarias/diarias.module';
import { UsuarioApiModule } from './usuario-api/usuario-api.module';
import { MailModule } from './common/mail/mail.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { AllExceptionFilter } from './common/filters/all-exceptions.filters';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { UserCommand } from './user-platform/usuario-command';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ServicosModule,
    UserPlatformModule,
    AuthModule,
    DiariasModule,
    UsuarioApiModule,
    MailModule,
    PasswordResetModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [
    UserCommand,
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
