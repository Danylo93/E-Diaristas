import { Injectable } from '@nestjs/common';
import { UserPlatform } from 'src/user-platform/entities/user-platform.entity';
import { UserPlatformService } from 'src/user-platform/user-platform.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserPlatformService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserPlatform> {
    const user = await this.userService.findOneByEmail(username);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      return match === true ? user : null;
    }
    return null;
  }
}
