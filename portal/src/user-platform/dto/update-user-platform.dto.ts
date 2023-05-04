import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPlatformDto } from './create-user-platform.dto';

export class UpdateUserPlatformDto extends PartialType(CreateUserPlatformDto) {}
